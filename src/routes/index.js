import loginRoute from './login';
import projectRoute from './project';
import locationRouter from './locations';
import companyUserRouter from './companyUser';

import { roleRouter } from './role';

const routesManagers = [
  loginRoute,
  projectRoute,
  locationRouter,
  companyUserRouter,
  roleRouter,
];

const loadRoutes = (router) => {
  routesManagers.forEach(routeManager => routeManager(router));
};

export default loadRoutes;
