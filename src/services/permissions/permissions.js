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
  const idsMap = _.map(ids, it => ({
    id: { [Op.eq]: it },
  }));

  return Permission.findAll({
    where: {
      [Op.or]: idsMap,
    },
  });
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
