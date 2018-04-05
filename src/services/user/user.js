import Sequelize from 'sequelize';
import _ from 'lodash';
import crypto from 'crypto';

import { encrypt } from '../../utils';
import { decryptData, encryptData } from '../../utils/token';
import { User, Role, Permission, Company } from '../../db/models';

const { Op } = Sequelize;
const associations = [
  {
    model: Role,
    as: 'roles',
    include: [
      {
        model: Permission,
        as: 'permissions',
        through: { attributes: [] },
      },
    ],
    through: { attributes: [] },
  },
  {
    model: Company,
    as: 'companies',
    attributes: ['id', 'name'],
    through: { attributes: [] },
  },
];

export const createUser = async (user) => {
  const password = crypto.createHmac('sha256', user.password).digest('hex');
  const newUser = {
    ...user,
    password,
  };
  return User.create(newUser);
};

export const listUsersWithList = (users) => {
  const idsMap = _.map(users, id => ({
    id: { [Op.eq]: id },
  }));

  return User.findAll({
    where: idsMap,
  });
};

export const find = async (userId, email) =>
  User.find({
    where: {
      id: { [Op.eq]: userId },
      email: { [Op.eq]: email },
    },
    attributes: ['id', 'name', 'email'],
    include: associations,
  });

export const findFromToken = async (token) => {
  const { id: userId, username } = decryptData(token);
  const user = await find(userId, username);

  const tokenUser = {
    id: user.id,
    name: user.name,
    username: user.email,
  };

  return encryptData(tokenUser);
};

export const findWithCredentials = (email, password) => {
  const hash = encrypt(password);

  return User.findOne({
    where: {
      email: {
        [Op.eq]: email,
      },
      password: {
        [Op.eq]: hash,
      },
    },
    include: associations,
  });
};

export const findFromCompany = async (companyId) => {
  const company = await Company.findOne({
    where: {
      id: { [Op.eq]: companyId },
    },
  });

  return company.getUsers({
    include: associations,
  });
};

export const updateUserRoles = async (userId, roles) => {
  const userQueryIds = _.map(roles, roleId => ({ id: { [Op.eq]: roleId } }));

  const user = User.findOne({
    where: {
      id: { [Op.eq]: userId },
    },
    include: associations,
  });

  const userRoles = await User.findAll({
    where: {
      [Op.or]: userQueryIds,
    },
  });

  await user.setRoles(userRoles);
  return user.reload({ include: associations });
};
