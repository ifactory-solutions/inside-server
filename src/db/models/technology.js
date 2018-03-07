module.exports = (sequelize, DataTypes) => {
  const Technology = sequelize.define(
    'Technology',
    {
      name: { allowNull: false, type: DataTypes.STRING },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
    },
    {
      tableName: 'Technologies',
    },
  );

  Technology.associate = (models) => {
    Technology.Projects = Technology.belongsToMany(models.Project, {
      as: 'projects',
      through: 'ProjectTechnology',
    });
  };

  return Technology;
};
