import Sequelize from 'sequelize';
import { Role, Permission, User, RolePermission, CompanyUser } from '../../db/models';

const { Op } = Sequelize;

const associations = [
  { model: Permission, as: 'permissions', through: RolePermission },
  { model: User, as: 'users', through: CompanyUser },
];

export const createRole = async role => Role.create(role, {
  include: [{ model: Permission, as: 'permissions' }],
});

export const findRole = async roleId => Role.findOne({
  where: {
    id: { [Op.eq]: roleId },
  },
  include: [associations[0]],
});

export const updateRole = async (roleId, role) =>
  Role.update(role, {
    where: {
      id: { [Op.eq]: roleId },
    },
  });

export const listRoles = async () => Role.findAll({
  include: [associations[0]],
});

export const deleteRole = async roleId => Role.destroy({
  where: {
    id: { [Op.eq]: roleId },
  },
});
