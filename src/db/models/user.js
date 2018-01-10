import _ from 'lodash';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      cpf: {
        type: DataTypes.STRING,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: DataTypes.STRING,
    },
    {
      tableName: 'Users',
      classMethods: {
        associate(models) {
          // associations can be defined here
        },
      },
      instanceMethods: {
        toJSON() {
          const privateAttributes = ['password'];

          return _.omit(this.dataValues, privateAttributes);
        },
      },
    },
  );
  return User;
};
