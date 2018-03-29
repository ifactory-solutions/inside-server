module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define(
    'Client',
    {
      name: { allowNull: false, type: DataTypes.STRING },
      createdAt: { allowNull: false, defaultValue: new Date(), type: DataTypes.DATE },
      updatedAt: { allowNull: false, defaultValue: new Date(), type: DataTypes.DATE },
    },
    {
      tableName: 'Clients',
    },
  );

  Client.associate = (models) => {
    Client.Company = Client.belongsTo(models.Company);
    Client.Project = Client.hasMany(models.Project);
  };

  return Client;
};
