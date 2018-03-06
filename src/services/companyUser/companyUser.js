import Sequelize from 'sequelize';
import { CompanyUser, Telephone, Email } from '../../db/models';

const { Op } = Sequelize;

const associations = [
  CompanyUser.Company,
  CompanyUser.User,
  { model: Telephone, as: 'telephones' },
  { model: Email, as: 'emails' },
  { association: CompanyUser.UserPersonalInfo },
  { association: CompanyUser.UserBankAccount },
  { association: CompanyUser.UserHomeAddress },
  { association: CompanyUser.UserDocuments },
];

const attrSettings = {
  exclude: ['UserId', 'CompanyId'],
};

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
    attributes: attrSettings,
  });

export const findCompanyUser = async (companyId, companyUserId) =>
  CompanyUser.findOne({
    where: {
      CompanyId: {
        [Op.eq]: companyId,
      },
      UserId: {
        [Op.eq]: companyUserId,
      },
    },
    include: associations,
  });

export const removeCompanyUser = async (companyId, userId) =>
  CompanyUser.destroy({
    where: {
      CompanyId: {
        [Op.eq]: companyId,
      },
      UserId: {
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
  });
