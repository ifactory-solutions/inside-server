import Sequelize from 'sequelize';
import { CompanyUser, Telephone, Email } from '../../db/models';
import { UserService } from '../../services/user';

const { Op } = Sequelize;
const associations = [
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

export const createCompanyUser = async (companyId, user) => {
  const systemUser = {
    name: user.personalInfo.fullName,
    cpf: user.documentation.cpf,
    email: user.emails[0].email,
    password: '123456',
  };

  const { id: userId } = await UserService.createUser(systemUser);

  const companyUser = {
    CompanyId: companyId,
    UserId: userId,
    ...user,
  };

  return CompanyUser.create(companyUser, {
    include: associations,
  });
};

export const listCompanyUser = async companyId =>
  CompanyUser.findAll({
    where: {
      CompanyId: {
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
