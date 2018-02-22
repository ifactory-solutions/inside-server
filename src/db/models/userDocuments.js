module.exports = (sequelize, DataTypes) => {
  const UserDocuments = sequelize.define(
    'UserDocuments',
    {
      numeroRG: { allowNull: false, type: DataTypes.STRING },
      dataEmissaoRG: { allowNull: false, type: DataTypes.STRING },
      orgaoEmissorRG: { allowNull: false, type: DataTypes.STRING },
      cpf: { allowNull: false, type: DataTypes.STRING },
      numeroCTPS: { allowNull: false, type: DataTypes.STRING },
      numeroPIS: { allowNull: false, type: DataTypes.STRING },
      numeroTitulo: { allowNull: false, type: DataTypes.STRING },
      numeroZonaEleitoral: { allowNull: false, type: DataTypes.STRING },
      numeroSecaoEleitoral: { allowNull: false, type: DataTypes.STRING },
      dataEmissaoTituloEleitor: { allowNull: false, type: DataTypes.STRING },
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
