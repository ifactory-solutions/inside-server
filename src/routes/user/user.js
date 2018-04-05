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

  router.get('/users', async (ctx) => {
    try {
      const { extras } = ctx.request;
      ctx.body = await UserService.findFromCompany(extras.companyId);
    } catch (error) {
      ctx.status = 500;
      ctx.body = error;
    }
  });

  router.put('/users/roles', async (ctx) => {
    try {
      const { userId, roles } = ctx.request.body;
      ctx.body = await UserService.updateUserRoles(userId, roles);
    } catch (error) {
      ctx.status = 500;
      ctx.body = error;
    }
  });
};
