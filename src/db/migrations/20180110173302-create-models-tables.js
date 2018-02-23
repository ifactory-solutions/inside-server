const models = require('../models');

module.exports = {
  up: (queryInterface) => {
    queryInterface
      .createTable(models.User.tableName, models.User.attributes)
      .then(() => queryInterface.createTable(models.Company.tableName, models.Company.attributes))
      .then(() => queryInterface.createTable(models.Email.tableName, models.Email.attributes))
      .then(() => queryInterface.createTable(models.Telephone.tableName, models.Telephone.attributes))
      .then(() => queryInterface.createTable(models.UserBankAccount.tableName, models.UserBankAccount.attributes))
      .then(() => queryInterface.createTable(models.UserDocuments.tableName, models.UserDocuments.attributes))
      .then(() => queryInterface.createTable(models.UserHomeAddress.tableName, models.UserHomeAddress.attributes))
      .then(() => queryInterface.createTable(models.UserPersonalInfo.tableName, models.UserPersonalInfo.attributes))
      .then(() => queryInterface.createTable(models.CompanyUser.tableName, models.CompanyUser.attributes));
  },
  down: (queryInterface) => {
    queryInterface
      .dropTable(models.Email.tableName)
      .then(() => queryInterface.dropTable(models.Company.tableName))
      .then(() => queryInterface.dropTable(models.Telephone.tableName))
      .then(() => queryInterface.dropTable(models.UserBankAccount.tableName))
      .then(() => queryInterface.dropTable(models.UserDocuments.tableName))
      .then(() => queryInterface.dropTable(models.UserHomeAddress.tableName))
      .then(() => queryInterface.dropTable(models.UserPersonalInfo.tableName))
      .then(() => queryInterface.dropTable(models.CompanyUser.tableName))
      .then(() => queryInterface.dropTable(models.User.tableName));
  },
};
