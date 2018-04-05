const models = require('../models');

module.exports = {
  up: queryInterface =>
    queryInterface
      .createTable(models.User.tableName, models.User.attributes)
      .then(() => queryInterface.createTable(models.Module.tableName, models.Module.attributes))
      .then(() => queryInterface.createTable(models.Company.tableName, models.Company.attributes))
      .then(() => queryInterface.createTable(models.CompanyUser.tableName, models.CompanyUser.attributes))
      .then(() => queryInterface.createTable(models.CompanyModule.tableName, models.CompanyModule.attributes))
      .then(() => queryInterface.createTable(models.Client.tableName, models.Client.attributes))
      .then(() => queryInterface.createTable(models.Email.tableName, models.Email.attributes))
      .then(() => queryInterface.createTable(models.Telephone.tableName, models.Telephone.attributes))
      .then(() => queryInterface.createTable(models.UserBankAccount.tableName, models.UserBankAccount.attributes))
      .then(() => queryInterface.createTable(models.UserDocuments.tableName, models.UserDocuments.attributes))
      .then(() => queryInterface.createTable(models.UserHomeAddress.tableName, models.UserHomeAddress.attributes))
      .then(() => queryInterface.createTable(models.UserPersonalInfo.tableName, models.UserPersonalInfo.attributes))
      .then(() => queryInterface.createTable(models.Email.tableName, models.Email.attributes))
      .then(() => queryInterface.createTable(models.Telephone.tableName, models.Telephone.attributes))
      .then(() => queryInterface.createTable(models.Project.tableName, models.Project.attributes))
      .then(() => queryInterface.createTable(models.Technology.tableName, models.Technology.attributes))
      .then(() => queryInterface.createTable(models.Country.tableName, models.Country.attributes))
      .then(() => queryInterface.createTable(models.State.tableName, models.State.attributes))
      .then(() => queryInterface.createTable(models.City.tableName, models.City.attributes))
      .then(() => queryInterface.createTable(models.Permission.tableName, models.Permission.attributes))
      .then(() => queryInterface.createTable(models.Role.tableName, models.Role.attributes))
      .then(() => queryInterface.createTable(models.RolePermission.tableName, models.RolePermission.attributes))
      .then(() => queryInterface.createTable(models.UserRole.tableName, models.UserRole.attributes)),
  down: queryInterface =>
    queryInterface
      .dropTable(models.UserRole.tableName)
      .then(() => queryInterface.dropTable(models.RolePermission.tableName))
      .then(() => queryInterface.dropTable(models.Role.tableName))
      .then(() => queryInterface.dropTable(models.Permission.tableName))
      .then(() => queryInterface.dropTable(models.City.tableName))
      .then(() => queryInterface.dropTable(models.State.tableName))
      .then(() => queryInterface.dropTable(models.Country.tableName))
      .then(() => queryInterface.dropTable(models.Email.tableName))
      .then(() => queryInterface.dropTable(models.Telephone.tableName))
      .then(() => queryInterface.dropTable(models.UserPersonalInfo.tableName))
      .then(() => queryInterface.dropTable(models.UserHomeAddress.tableName))
      .then(() => queryInterface.dropTable(models.UserDocuments.tableName))
      .then(() => queryInterface.dropTable(models.UserBankAccount.tableName))
      .then(() => queryInterface.dropTable(models.Client.tableName))
      .then(() => queryInterface.dropTable(models.CompanyUser.tableName))
      .then(() => queryInterface.dropTable(models.CompanyModule.tableName))
      .then(() => queryInterface.dropTable(models.Module.tableName))
      .then(() => queryInterface.dropTable(models.Company.tableName))
      .then(() => queryInterface.dropTable(models.Technology.tableName))
      .then(() => queryInterface.dropTable(models.Project.tableName))
      .then(() => queryInterface.dropTable(models.User.tableName)),
};
