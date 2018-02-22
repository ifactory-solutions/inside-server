import Sequelize from 'sequelize';

const { Op } = Sequelize;

export const getFilter = (key, value) => ({ key, value });

export const findAll = async dataModel => dataModel.findAll();

export const findOne = async (dataModel, filter) =>
  dataModel.findOne({
    where: {
      [filter.key]: {
        [Op.eq]: filter.value,
      },
    },
  });

export const create = async (dataModel, record) => dataModel.create(record);

export const update = async (dataModel, filter, record) =>
  dataModel.update(record, {
    where: {
      [filter.key]: {
        [Op.eq]: filter.value,
      },
    },
  });

export const remove = async (dataModel, filter) =>
  dataModel.destroy({
    where: {
      [filter.key]: {
        [Op.eq]: filter.value,
      },
    },
  });
