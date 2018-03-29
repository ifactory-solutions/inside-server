import { CompanyService } from '../../services/company';

const {
  getCompanies,
} = CompanyService;

const COMPANIES_URL = '/companies';

const companyRoute = (router) => {
  router.get(COMPANIES_URL, async (ctx) => {
    try {
      ctx.body = await getCompanies();
    } catch (error) {
      ctx.status = 500;
      ctx.body = error;
    }
  });
};

export default companyRoute;
