import Router from 'koa-router';

const router = new Router();

router.post('/auth', async (ctx) => {
  const auth;
  // Some validation
  if(true) {
    auth = {
      success: true,
      token: 'some-token'
    }
  } else {
    auth = {
      success: false,
      error: 'Invalid'
    }
  }
  ctx.body = auth;
});

const routes = router.routes();

export default () => routes;