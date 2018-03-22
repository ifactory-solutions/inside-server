import { CompanyUser } from '../../services/companyUser';

const { listCompanyUser, findCompanyUser, updateCompanyUser, createCompanyUser, removeCompanyUser } = CompanyUser;

const COMPANY_USERS_URL = '/company/:companyId/users';

const companyUserRoute = (router) => {
  router.get(COMPANY_USERS_URL, async (ctx) => {
    try {
      const { companyId } = ctx.params;
      ctx.body = await listCompanyUser(companyId);
    } catch (error) {
      ctx.status = 500;
      ctx.body = error;
    }
  });

  router.get(`${COMPANY_USERS_URL}/:userId`, async (ctx) => {
    try {
      const { companyId, userId } = ctx.params;
      ctx.body = await findCompanyUser(companyId, userId);
    } catch (error) {
      ctx.status = 500;
      ctx.body = error;
    }
  });

  router.delete(`${COMPANY_USERS_URL}/:userId`, async (ctx) => {
    try {
      const { companyId, userId } = ctx.params;
      ctx.body = await removeCompanyUser(companyId, userId);
    } catch (error) {
      ctx.status = 500;
      ctx.body = error;
    }
  });

  router.post(COMPANY_USERS_URL, async (ctx) => {
    try {
      const { companyId } = ctx.params;
      const companyUser = ctx.request.body;
      ctx.body = await createCompanyUser(companyId, companyUser);
    } catch (error) {
      ctx.status = 500;
      ctx.body = error;
    }
  });

  router.put(`${COMPANY_USERS_URL}/:userId`, async (ctx) => {
    try {
      const { companyId, userId } = ctx.params;
      const companyUser = ctx.request.body;
      ctx.body = await updateCompanyUser(companyId, userId, companyUser);
    } catch (error) {
      console.error(error);
      ctx.status = 500;
      ctx.body = error;
    }
  });
};

export default companyUserRoute;
