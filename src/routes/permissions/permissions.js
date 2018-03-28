import { PermissionService } from '../../services/permissions';

export const permissionRouter = (router) => {
  router.get('/permissions', async (ctx) => {
    try {
      const { companyId } = ctx.request.extras;
      ctx.body = await PermissionService.listPermissions(companyId);
    } catch (error) {
      ctx.status = 500;
      ctx.body = error;
    }
  });
};
