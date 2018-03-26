import loginRoute from './login';
import clientRoute from './client';
import { roleRouter } from './role';
import { userRouter } from './user';
import projectRoute from './project';
import locationRouter from './locations';
import companyUserRouter from './companyUser';
import { permissionRouter } from './permissions';

const routesManagers = [
  loginRoute,
  clientRoute,
  projectRoute,
  locationRouter,
  companyUserRouter,
  roleRouter,
  userRouter,
  permissionRouter,
];

const loadRoutes = (router) => {
  routesManagers.forEach(routeManager => routeManager(router));
};

export default loadRoutes;
