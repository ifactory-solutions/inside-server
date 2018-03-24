import Sequelize from 'sequelize';

import { Role, Permission } from '../../db/models';
import { PermissionService } from '../permissions';

const { Op } = Sequelize;

const associations = [
  {
    model: Permission,
    as: 'permissions',
    through: { attributes: [] },
  },
];

export const create = async (role) => {
  const { permissions, ...newRole } = role;
  const roleCreated = await Role.create(newRole);

  if (permissions.length) {
    const permissionRecords = await PermissionService.listPermissionsWithList(permissions);
    await roleCreated.setPermissions(permissionRecords);
  }

  return roleCreated;
};

export const find = async roleId =>
  Role.findOne({
    where: {
      id: { [Op.eq]: roleId },
    },
    include: associations,
  });

export const update = async (roleId, role) => {
  const { permissions, ...editedRole } = role;
  const roleRecord = await find(roleId);
  const permissionRecords = await PermissionService.listPermissionsWithList(permissions);

  await roleRecord.setPermissions(permissionRecords);
  return roleRecord.updateAttributes(editedRole);
};

export const list = async () =>
  Role.findAll({
    include: associations,
  });

export const remove = async roleId =>
  Role.destroy({
    where: {
      id: { [Op.eq]: roleId },
    },
  });
