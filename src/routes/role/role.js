import { RoleService } from '../../services/role';

export const roleRouter = (router) => {
  router.post('/roles', async (ctx) => {
    try {
      const { body, extras } = ctx.request;
      const role = body;
      role.CompanyId = extras.companyId;
      ctx.body = await RoleService.create(role);
    } catch (error) {
      ctx.status = 500;
      ctx.body = error;
    }
  });

  router.get('/roles', async (ctx) => {
    try {
      const { extras } = ctx.request;

      ctx.body = await RoleService.list(extras.companyId);
    } catch (error) {
      ctx.status = 500;
      ctx.body = error;
    }
  });

  router.get('/roles/:id', async (ctx) => {
    try {
      const { id } = ctx.params;
      const { extras } = ctx.request;
      ctx.body = await RoleService.find(id, extras.companyId);
    } catch (error) {
      ctx.status = 500;
      ctx.body = error;
    }
  });

  router.put('/roles/:id', async (ctx) => {
    try {
      const { id } = ctx.params;
      const role = ctx.request.body;
      ctx.body = await RoleService.update(id, role);
    } catch (error) {
      ctx.status = 500;
      ctx.body = error;
    }
  });

  router.delete('/roles/:id', async (ctx) => {
    try {
      const { id } = ctx.params;
      const { extras } = ctx.request;
      ctx.body = await RoleService.remove(id, extras.companyId);
    } catch (error) {
      ctx.status = 500;
      ctx.body = error;
    }
  });
};
