const _ = require('lodash');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      cpf: { type: DataTypes.STRING, unique: true },
      email: { type: DataTypes.STRING, unique: true, validate: { isEmail: true } },
      password: DataTypes.STRING,
      createdAt: { allowNull: false, type: DataTypes.DATE },
      updatedAt: { allowNull: false, type: DataTypes.DATE },
    },
    {
      tableName: 'Users',
    },
  );

  User.associate = (model) => {
    User.roles = User.belongsToMany(
      models.Role,
      {
        as: 'roles',
        through: models.CompanyUser,
      }
    );
  }

  // Instance Method
  User.prototype.toJSON = () => {
    const privateAttributes = ['password'];
    return _.omit(this.dataValues, privateAttributes);
  };

  return User;
};
