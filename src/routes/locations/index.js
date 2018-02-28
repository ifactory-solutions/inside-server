import { listCountries, listStates, listCities } from '../../services/locations';

const locationsRoutes = (router) => {
  router.get('/locations/countries', async (ctx) => {
    try {
      ctx.body = await listCountries();
    } catch (error) {
      ctx.body = error;
      ctx.status = 500;
    }
  });

  router.get('/locations/countries/:countryId/states', async (ctx) => {
    try {
      const { countryId } = ctx.params;
      ctx.body = await listStates(countryId);
    } catch (error) {
      ctx.body = error;
      ctx.status = 500;
    }
  });

  router.get('/locations/states/:stateId/cities', async (ctx) => {
    try {
      const { stateId } = ctx.params;
      ctx.body = await listCities(stateId);
    } catch (error) {
      ctx.body = error;
      ctx.status = 500;
    }
  });
};

export default locationsRoutes;
