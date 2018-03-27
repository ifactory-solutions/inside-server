import { Client } from '../../db/models';

export const allByCompany = async CompanyId =>
  Client.findAll({
    where: {
      CompanyId,
    },
  });
