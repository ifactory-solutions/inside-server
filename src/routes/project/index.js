import { Project } from '../../services/project';

const projectRoute = (router) => {
  router.get('/projects', async (ctx) => {
    try {
      ctx.body = await Project.all();
    } catch (error) {
      ctx.status = 500;
      ctx.body = error;
    }
  });

  router.post('/clients/:id/project', async (ctx) => {
    try {
      const { clientId } = ctx.params;
      const project = ctx.request.body;
      ctx.body = await Project.insertProjectToClient(clientId, project);
    } catch (error) {
      ctx.status = 500;
      ctx.body = error;
    }
  });
};

export default projectRoute;
