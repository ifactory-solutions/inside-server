module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    'Project',
    {
      name: { allowNull: false, type: DataTypes.STRING },
      status: { allowNull: false, type: DataTypes.STRING },
      description: { allowNull: false, type: DataTypes.STRING },
      startDate: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      endDate: {
        allowNull: true,
        type: DataTypes.DATE,
      },
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
      tableName: 'Projects',
    },
  );

  Project.associate = (models) => {
    Project.Technologies = Project.belongsToMany(models.Technology, {
      as: 'technologies',
      through: 'ProjectTechnology',
    });
    Project.Client = Project.belongsTo(models.Client);
  };

  return Project;
};
