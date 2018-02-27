module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define(
    'City',
    {
      name: { allowNull: false, type: DataTypes.STRING },
      createdAt: { allowNull: false, defaultValue: new Date(), type: DataTypes.DATE },
      updatedAt: { allowNull: false, defaultValue: new Date(), type: DataTypes.DATE },
    },
    {
      tableName: 'Cities',
    },
  );

  City.associate = (models) => {
    City.belongsTo(models.State);
  };

  return City;
};
