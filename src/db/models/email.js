module.exports = (sequelize, DataTypes) => {
  const Email = sequelize.define(
    'Email',
    {
      email: { allowNull: false, type: DataTypes.STRING },
      type: { allowNull: false, type: DataTypes.STRING },
    },
    {
      tableName: 'Emails',
    },
  );

  Email.associate = (models) => {
    Email.belongsTo(models.CompanyUser);
  };

  return Email;
};
