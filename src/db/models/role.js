module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define(
        'Role',
        {
            name: { allowNull: false, type: DataTypes.STRING },
        },
        {
            tableName: 'Roles',
        }
    );

    Role.associate((models) => {
        Role.Permissions = Role.hasMany(models.Permission);
        Role.Users = Role.belongsToMany(models.Users);
        Role.Company = Role.belongsTo(models.Company);
    });

    return Role;
}