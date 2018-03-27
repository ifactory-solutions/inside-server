import { Client } from '../../services/client';

const clientRoute = (router) => {
  router.get('/company/:id/clients', async (ctx) => {
    try {
      const { id } = ctx.params;
      ctx.body = await Client.allByCompany(id);
    } catch (error) {
      ctx.status = 500;
      ctx.body = error;
    }
  });
};

export default clientRoute;
