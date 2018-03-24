import Sequelize from 'sequelize';

import { Role, Permission, User } from '../../db/models';
import { PermissionService } from '../permissions';
import { UserService } from '../user';

const { Op } = Sequelize;

const associations = [
  {
    model: Permission,
    as: 'permissions',
    through: { attributes: [] },
  },
  {
    model: User,
    as: 'users',
    attributes: ['id', 'name', 'email'],
    through: { attributes: [] },
  },
];

export const create = async (role) => {
  const { permissions, users, ...newRole } = role;
  const roleCreated = await Role.create(newRole);

  if (permissions && permissions.length) {
    const permissionRecords = await PermissionService.listPermissionsWithList(permissions);
    await roleCreated.setPermissions(permissionRecords);
  }

  if (users && users.length) {
    const userRecords = await UserService.listUsersWithList(users);
    await roleCreated.setUsers(userRecords);
  }

  return roleCreated.reload({ include: associations });
};

export const find = async roleId =>
  Role.findOne({
    where: {
      id: { [Op.eq]: roleId },
    },
    include: associations,
  });

export const update = async (roleId, role) => {
  const { permissions, users, ...editedRole } = role;
  const roleRecord = await find(roleId);

  if (permissions) {
    const permissionRecords = await PermissionService.listPermissionsWithList(permissions);
    await roleRecord.setPermissions(permissionRecords);
  }

  if (users) {
    const userRecords = await UserService.listUsersWithList(users);
    await roleRecord.setUsers(userRecords);
  }

  await roleRecord.updateAttributes(editedRole);

  return roleRecord.reload({ include: associations });
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
