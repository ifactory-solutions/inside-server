import { UserService } from '../../services/user';
import { decryptData } from '../../utils/token';

export const userRouter = (router) => {
  router.get('/users/me', async (ctx) => {
    try {
      const token = ctx.headers.authorization;
      const { id, username } = decryptData(token);

      ctx.body = await UserService.find(id, username);
    } catch (error) {
      ctx.status = 500;
      ctx.body = error;
    }
  });
};