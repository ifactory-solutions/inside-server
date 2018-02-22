import * as SimpleCrud from '../simpleCrudService';
import { CompanyUser } from '../../db/models';

export const createCompanyUser = async user => SimpleCrud.create(CompanyUser, user);
export const listCompanyUser = async () => async companyId =>
  CompanyUser.find({
    where: {
      companyId,
    },
  });

export const findCompanyUser = async (companyId, userId) =>
  CompanyUser.findOne({
    where: {
      companyId,
      userId,
    },
  });

export const removeCompanyUser = async (companyId, userId) =>
  CompanyUser.findOne({
    where: {
      companyId,
      userId,
    },
  });

export const updateCompanyUser = async (companyId, userId, companyUser) =>
  CompanyUser.update(companyUser, {
    where: {
      companyId,
      userId,
    },
  });
