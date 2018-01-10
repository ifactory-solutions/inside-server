import 'babel-polyfill';
import koa from 'koa';
import cors from 'kcors';
import logger from 'koa-logger';
import koaRouter from 'koa-router';
import bodyParser from 'koa-bodyparser';
import Boom from 'boom';
import jwt from 'koa-jwt';

import { serverPort } from './config';
import loadRoutes from './routes';
import db from './db/models';

// app
const app = new koa();

// routes
const router = new koaRouter();
loadRoutes(router);

if (process.env.NODE_ENV === 'development') {
  const corsOptions = {
    credentials: true,
    origin: '*',
  };
  app.use(cors(corsOptions));
}

app
  .use(bodyParser())
  .use(
    jwt({
      secret: process.env.JWT_KEY,
    }).unless({
      path: ['/', '/login'],
    }),
  )
  .use(logger())
  .use(router.routes())
  .use(
    router.allowedMethods({
      throw: true,
      notImplemented: () => new Boom.notImplemented(),
      methodNotAllowed: () => new Boom.methodNotAllowed(),
    }),
  )
  .use(async context => {
    context.body = 'INSIDE API';
  });

// server
const server = app.listen(serverPort, () => {
  db.sequelize.sync();
  console.log(`Server started on port ${serverPort}`);
});

module.exports = server;
