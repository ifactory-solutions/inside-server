module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define(
    'State',
    {
      name: { allowNull: false, type: DataTypes.STRING },
      createdAt: { allowNull: false, defaultValue: new Date(), type: DataTypes.DATE },
      updatedAt: { allowNull: false, defaultValue: new Date(), type: DataTypes.DATE },
    },
    {
      tableName: 'States',
    },
  );

  State.associate = (models) => {
    State.hasMany(models.City);
    State.belongsTo(models.Country);
  };

  return State;
};
