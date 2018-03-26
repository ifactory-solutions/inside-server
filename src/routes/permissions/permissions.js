import { PermissionService } from '../../services/permissions';

export const permissionRouter = (router) => {
  router.get('/permissions', async (ctx) => {
    try {
      ctx.body = await PermissionService.listPermissions();
    } catch (error) {
      ctx.status = 500;
      ctx.body = error;
    }
  });
};
