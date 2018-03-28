import Sequelize from 'sequelize';
import _ from 'lodash';

import { Permission, Company, Module } from '../../db/models';

const { Op } = Sequelize;

export const createPermission = async permission => Permission.create(permission);

export const listPermissions = async (companyId) => {
  const company = await Company.findOne({
    where: {
      id: { [Op.eq]: companyId },
    },
    include: [{ model: Module, as: 'modules' }],
  });

  const moduleIds = _.map(company.modules, it => ({
    ModuleId: { [Op.eq]: it.id },
  }));

  return Permission.findAll({
    where: {
      [Op.or]: moduleIds,
    },
  });
};

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
