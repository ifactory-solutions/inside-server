module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define(
    'Country',
    {
      name: { allowNull: false, type: DataTypes.STRING },
      sortname: { allowNull: false, type: DataTypes.STRING },
      phonecode: { allowNull: false, type: DataTypes.INTEGER },
      createdAt: { allowNull: false, defaultValue: new Date(), type: DataTypes.DATE },
      updatedAt: { allowNull: false, defaultValue: new Date(), type: DataTypes.DATE },
    },
    {
      tableName: 'Countries',
    },
  );

  Country.associate = (models) => {
    Country.hasMany(models.State);
  };

  return Country;
};
