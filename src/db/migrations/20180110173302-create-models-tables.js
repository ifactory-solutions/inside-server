const models = require('../models');

module.exports = {
  up: (queryInterface) => {
    queryInterface
      .createTable(models.User.tableName, models.User.attributes)
      .then(() => queryInterface.createTable(models.Company.tableName, models.Company.attributes))
      .then(() => queryInterface.createTable(models.CompanyUser.tableName, models.CompanyUser.attributes));
  },
  down: (queryInterface) => {
    queryInterface
      .dropTable(models.User.tableName)
      .then(() => queryInterface.dropTable(models.Company.tableName))
      .then(() => queryInterface.dropTable(models.CompanyUser.tableName));
  },
};
