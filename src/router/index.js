import compose from 'koa-compose';

// Import all routes
import user from './user';
import upload from './upload';

export default () => compose([
  user(),
  upload()
]);
