import 'babel-polyfill';
import Koa from 'koa';
import cors from 'kcors';
import logger from 'koa-logger';
import KoaRouter from 'koa-router';
import bodyParser from 'koa-bodyparser';
import Boom from 'boom';
import jwt from 'koa-jwt';

import { serverPort } from './config';
import loadRoutes from './routes';
import db from './db/models';
import getCurrentUser from './middlewares/getCurrentUser';
// app
const app = new Koa();

const NotImplemented = Boom.notImplemented;
const MethodNotAllowed = Boom.methodNotAllowed;

// routes
const router = new KoaRouter();
loadRoutes(router);

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'development_docker') {
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
  .use(getCurrentUser)
  .use(router.routes())
  .use(
    router.allowedMethods({
      throw: true,
      notImplemented: () => new NotImplemented(),
      methodNotAllowed: () => new MethodNotAllowed(),
    }),
  )
  .use(async (context) => {
    context.body = 'INSIDE API';
  });

// server
const server = app.listen(serverPort, () => {
  db.sequelize.sync();
  console.log(`Server started on port ${serverPort}`);
});

module.exports = server;
