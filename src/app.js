// const config = require('config')
import Koa from 'koa';
import jwt from 'koa-jwt';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import config from './config';
import authRoute from './router/auth';
import router from './router';
import db from './middleware/database';


console.info(`ROOT_PATH: ${config.ROOT_PATH}`);

const app = new Koa();

// sequelize & squel
app.use(db);

// rest logger
app.use(logger());
app.use(bodyParser());

// x-response-time
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// Auth route
// Public route
app.use(authRoute());

// Check if token is valid
app.use(jwt({ secret: process.env.SECRET || 'my-secret' }));

// Protected routes
app.use(router());
// app.use(router.allowedMethods());

app.listen(process.env.PORT || 3000);
console.info(`Node ${process.version} : ${config.NODE_ENV} listening on port ${process.env.PORT || 3000}`);
