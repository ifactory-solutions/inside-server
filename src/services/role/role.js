import Sequelize from 'sequelize';
import { Role, Permission, User } from '../../db/models';

const { Op } = Sequelize;

const associations = [
  { model: Permission, as: 'permissions' },
  { model: User, as: 'users' },
];

export const createRole = async role => Role.create(role, {
  include: associations,
});

export const findRole = async roleId => Role.findOne({
  where: {
    id: { [Op.eq]: roleId },
  },
  include: associations,
});

export const updateRole = async (roleId, role) =>
  Role.update(role, {
    where: {
      id: { [Op.eq]: roleId },
    },
  });

export const listRoles = async userId => Role.findAll(
//   {
//     where: {
//       userId: { [Op.eq]: userId },
//     },
//   }
);

export const deleteRole = async roleId => Role.destroy({
  where: {
    id: { [Op.eq]: roleId },
  },
});
