import Sequelize from 'sequelize';
import _ from 'lodash';

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
    through: { attributes: [] },
  },
];

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
