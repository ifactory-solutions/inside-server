import { RoleService } from '../../services/role';

export const roleRouter = (router) => {
  router.post('/roles', async (ctx) => {
    try {
      const role = ctx.request.body;
      ctx.body = await RoleService.createRole(role);
    } catch (error) {
      ctx.code = 500;
      ctx.body = error;
    }
  });

  router.get('/roles', async (ctx) => {
    try {
      ctx.body = await RoleService.listRoles();
    } catch (error) {
      ctx.code = 500;
      ctx.body = error;
    }
  });

  router.get('/roles/:id', async (ctx) => {
    try {
      const { id } = ctx.params;
      ctx.body = await RoleService.findRole(id);
    } catch (error) {
      ctx.code = 500;
      ctx.body = error;
    }
  });

  router.put('/roles/:id', async (ctx) => {
    try {
      const { id } = ctx.params;
      const role = ctx.body;
      ctx.body = await RoleService.updateRole(id, role);
    } catch (error) {
      ctx.code = 500;
      ctx.body = error;
    }
  });

  router.delete('/roles/:id', async (ctx) => {
    try {
      const { id } = ctx.params;
      ctx.body = await RoleService.deleteRole(id);
    } catch (error) {
      ctx.code = 500;
      ctx.body = error;
    }
  });
};
