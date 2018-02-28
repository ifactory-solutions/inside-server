import loginRoute from './login';
import companyUserRouter from './companyUser';
import locationRouter from './locations';

const routesManagers = [loginRoute, companyUserRouter, locationRouter];

const loadRoutes = (router) => {
  routesManagers.forEach(routeManager => routeManager(router));
};

export default loadRoutes;
