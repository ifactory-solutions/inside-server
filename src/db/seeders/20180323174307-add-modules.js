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
          name: 'Projetos',
          description: 'Módulo de Projetos',
        },
        {
          id: 6,
          name: 'Gestão de Carreias',
          description: 'Módulo de Gestão de Carreiras',
        },
        {
          id: 7,
          name: 'Ponto',
          description: 'Módulo de Gestão de Ponto',
        },
        {
          id: 8,
          name: 'Clientes',
          description: 'Módulo de Clientes',
        },
      ],
      {},
    ),

  down: queryInterface => queryInterface.bulkDelete('Modules', null, {}),
};
