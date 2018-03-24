import Sequelize from 'sequelize';
import _ from 'lodash';

import { Permission } from '../../db/models';

const { Op } = Sequelize;

export const createPermission = async permission => Permission.create(permission);

export const listPermission = async roleId =>
  Permission.findAll({
    where: {
      roleId: { [Op.eq]: roleId },
    },
  });

export const listPermissionsWithList = async (ids) => {
  const promises = _.map(ids, it =>
    Permission.find({
      where: {
        id: { [Op.eq]: it },
      },
    }),
  );

  return Promise.all(promises);
};

export const editPermission = async (id, permission) =>
  Permission.update(permission, {
    where: {
      id: { [Op.eq]: id },
    },
  });

export const removePermission = async id =>
  Permission.destroy({
    where: {
      id: { [Op.eq]: id },
    },
  });

export const getPermissions = async (...permissionIds) => {
  const promises = _.map(permissionIds, id =>
    Permission.findOne({
      where: {
        id: { [Op.eq]: id },
      },
    }),
  );

  return Promise.all(promises);
};
