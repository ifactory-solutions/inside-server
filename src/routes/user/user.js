import { UserService } from '../../services/user';

export const userRouter = (router) => {
  router.get('/users/me', async (ctx) => {
    try {
      const token = ctx.headers.authorization;
      const user = await UserService.findFromToken(token);
      ctx.body = user;
    } catch (error) {
      ctx.status = 500;
      ctx.body = error;
    }
  });
};
