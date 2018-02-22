import loginRoute from './login';
import companyUserRouter from './companyUser';

const loadRoutes = (router) => {
  loginRoute(router);
  companyUserRouter(router);
};

export default loadRoutes;
