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
};

export default projectRoute;
