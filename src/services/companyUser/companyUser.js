import Sequelize from 'sequelize';
import { CompanyUser, Telephone, Email } from '../../db/models';

const { Op } = Sequelize;

const associations = [
  CompanyUser.Company,
  { model: Telephone, as: 'telephones' },
  { model: Email, as: 'emails' },
  { association: CompanyUser.UserPersonalInfo },
  { association: CompanyUser.UserBankAccount },
  { association: CompanyUser.UserHomeAddress },
  { association: CompanyUser.UserDocuments },
];

export const createCompanyUser = async user =>
  CompanyUser.create(user, {
    include: associations,
  });

export const listCompanyUser = async companyId =>
  CompanyUser.findAll({
    where: {
      companyId: {
        [Op.eq]: companyId,
      },
    },
    include: associations,
  });

export const findCompanyUser = async companyUserId =>
  CompanyUser.findOne({
    where: {
      id: {
        [Op.eq]: companyUserId,
      },
    },

    include: associations,
  });

export const removeCompanyUser = async (companyId, userId) =>
  CompanyUser.findOne({
    where: {
      companyId: {
        [Op.eq]: companyId,
      },
      userId: {
        [Op.eq]: userId,
      },
    },
  });

export const updateCompanyUser = async (companyId, userId, companyUser) =>
  CompanyUser.update(companyUser, {
    where: {
      companyId: {
        [Op.eq]: companyId,
      },
      userId: {
        [Op.eq]: userId,
      },
    },

    include: associations,
  });
