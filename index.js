import Koa from 'koa';

const app = new Koa();
const port = 3000;
app.use(async ctx => {
  ctx.body = 'Inside Server';
});

app.listen(port, () => console.log(`Server is running on ${port}`));
