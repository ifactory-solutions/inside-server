module.exports = (sequelize, DataTypes) => {
  const UserDocuments = sequelize.define(
    'UserDocuments',
    {
      numeroRG: { allowNull: false, type: DataTypes.STRING },
      dataEmissaoRG: { allowNull: false, type: DataTypes.STRING },
      orgaoEmissorRG: { allowNull: false, type: DataTypes.STRING },
      cpf: { allowNull: false, type: DataTypes.STRING },
      numeroCTPS: { allowNull: true, type: DataTypes.STRING },
      numeroPIS: { allowNull: true, type: DataTypes.STRING },
      numeroTitulo: { allowNull: true, type: DataTypes.STRING },
      numeroZonaEleitoral: { allowNull: true, type: DataTypes.STRING },
      numeroSecaoEleitoral: { allowNull: true, type: DataTypes.STRING },
      dataEmissaoTituloEleitor: { allowNull: true, type: DataTypes.STRING },
    },
    {
      tableName: 'UserDocuments',
    },
  );

  UserDocuments.associate = (models) => {
    UserDocuments.belongsTo(models.CompanyUser);
  };

  return UserDocuments;
};
