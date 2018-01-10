import { login } from '../../services/login';
import { handleErrors } from '../../utils/';

const loginRoute = router => {
  router.post('/login', async ctx => {
    try {
      ctx.body = await login(ctx.request.body);
    } catch (error) {
      const { status, ...body } = handleErrors(error);
      ctx.status = status;
      ctx.body = body;
    }
  });
};

export default loginRoute;
