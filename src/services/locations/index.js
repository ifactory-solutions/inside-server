import Sequelize from 'sequelize';
import { Country, State, City } from '../../db/models';
import { findAll } from '../simpleCrudService';

const { Op } = Sequelize;

export const listCountries = async () => findAll(Country);

export const listStates = countryId =>
  State.findAll({
    where: {
      CountryId: {
        [Op.eq]: countryId,
      },
    },
  });

export const listCities = stateId =>
  City.findAll({
    where: {
      StateId: {
        [Op.eq]: stateId,
      },
    },
  });
