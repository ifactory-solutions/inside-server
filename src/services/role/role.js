import Sequelize from 'sequelize';
import _ from 'lodash';

import { Role, Permission } from '../../db/models';

const { Op } = Sequelize;

const associations = [
  {
    model: Permission,
    as: 'permissions',
    through: { attributes: [] },
  },
];

export const create = async role =>
  Role.create(role, {
    include: [{ model: Permission, as: 'permissions' }],
  });

export const find = async roleId =>
  Role.findOne({
    where: {
      id: { [Op.eq]: roleId },
    },
    include: associations,
  });

export const update = async (roleId, role) => {
  const roleRecord = await find(roleId);
  const permissionsPromises = _.map(role.permissions, it =>
    Permission.find({
      where: {
        id: { [Op.eq]: it.id },
      },
    }),
  );

  const permissionsRecords = await Promise.all(permissionsPromises);
  await roleRecord.setPermissions(permissionsRecords);
  return roleRecord.updateAttributes(_.omit(role, ['permissions']));
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
