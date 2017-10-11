import koa from 'koa';
import cors from 'kcors';
import logger from 'koa-logger';
import koaRouter from 'koa-router';
import koaBody from 'koa-bodyparser';
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';
import schema from './schema';

/* eslint new-cap: ["error", { "newIsCap": false }] */
const app = new koa();
const router = new koaRouter();

// koaBody is needed just for POST.
router.post('/graphql', koaBody(), graphqlKoa({ schema }));
router.get('/graphql', graphqlKoa({ schema }));

// GraphiQL tool
router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

if (process.env.NODE_ENV === 'development') {
  const corsOptions = {
    credentials: true,
    origin: '*',
  };
  app.use(cors(corsOptions));
}

app.use(logger());
app.use(router.routes());
app.use(router.allowedMethods());

export default app;
