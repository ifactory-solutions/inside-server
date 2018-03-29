module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert(
      'Modules',
      [
        {
          id: 1,
          name: 'Dashboard',
          description: 'Módulo de Dashboard',
        },
        {
          id: 2,
          name: 'Administração',
          description: 'Módulo Administrativo',
        },
        {
          id: 3,
          name: 'Perfil',
          description: 'Módulo de Perfil',
        },
        {
          id: 4,
          name: 'Gestão de Pessoas',
          description: 'Módulo de Gestão de Pessoas',
        },
        {
          id: 5,
          name: 'Gestão de Projetos',
          description: 'Módulo de Gestão de Projetos',
        },
        {
          id: 6,
          name: 'Gestão de Carreias',
          description: 'Módulo de Gestão de Carreiras',
        },
        {
          id: 7,
          name: 'Gestão de Ponto',
          description: 'Módulo de Gestão de Ponto',
        },
        {
          id: 8,
          name: 'Clientes',
          description: 'Módulo de Clientes',
        },
        {
          id: 9,
          name: 'Administrador Inside',
          description: 'Módulo dos Administradores do Inside',
        },
      ],
      {},
    ),

  down: queryInterface => queryInterface.bulkDelete('Modules', null, {}),
};
