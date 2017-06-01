import Router from 'koa-router';

const router = new Router();

router.get('/user', async (ctx) => {
  // const raws = await ctx.orm().sql.select().from('user').limit(10).query();
  const User = ctx.orm().user;
  const users = await User.findAll({ limit: 1 });

  ctx.body = users;
});

router.get('/hi', async (ctx) => {
  ctx.body = 'hi';
});

router.get('/sync', async (ctx) => {
  const Bar = ctx.orm().sync;
  Bar.sync({ force: true });
});


const routes = router.routes();

export default () => routes;
