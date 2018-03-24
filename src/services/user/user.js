import Sequelize from 'sequelize';
import _ from 'lodash';

import { decryptData, encryptData } from '../../utils/token';
import { User, Role, Permission } from '../../db/models';

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
];

export const listUsersWithList = (users) => {
  const idsMap = _.map(users, id => ({
    id: { [Op.eq]: id },
  }));

  return User.findAll({
    where: idsMap,
  });
};

export const findFromToken = async (token) => {
  const { id: userId, username } = decryptData(token);
  const user = await User.find({
    where: {
      id: { [Op.eq]: userId },
      email: { [Op.eq]: username },
    },
    attributes: ['id', 'name', 'email'],
    include: associations,
  });

  const tokenUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    roles: user.roles,
  };

  return encryptData(tokenUser);
};
