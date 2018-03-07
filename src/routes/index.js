import loginRoute from './login';
import projectRoute from './project';
import locationRouter from './locations';
import companyUserRouter from './companyUser';

const routesManagers = [
  loginRoute,
  projectRoute,
  locationRouter,
  companyUserRouter,
];

const loadRoutes = (router) => {
  routesManagers.forEach(routeManager => routeManager(router));
};

export default loadRoutes;
