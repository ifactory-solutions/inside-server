import { RoleService } from '../../services/role';

export const permissionRouter = (router) => {
  router.post('/roles', async (ctx) => {
    const role = ctx.body;
    return RoleService.createRole(role);
  });

  router.get('/roles', async (ctx) => {
    return RoleService.listRoles();
  });

  router.get('/roles/:id', async (ctx) => {
    const { id } = ctx.params;
    return RoleService.findRole(id);
  });

  router.put('/roles/:id', async (ctx) => {
    const { id } = ctx.params;
    const role = ctx.body;
    return RoleService.updateRole(id, role);
  });

  router.delete('/roles/:id', async (ctx) => {
    const { id } = ctx.params;
    return RoleService.deleteRole(id);
  });
};

