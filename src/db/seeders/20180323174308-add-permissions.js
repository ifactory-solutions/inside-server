module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert(
      'Permissions',
      [
        {
          id: 1,
          name: 'Visualizar Dashboard',
          context: 'Menu',
          action: 'view',
          resource: 'dashboard',
          description: 'Permite acessar o módulo do dashboard',
          ModuleId: 1,
        },
        {
          id: 2,
          name: 'Visualizar Perfis',
          context: 'Menu',
          action: 'view',
          resource: 'roles',
          description: 'Permite acessar o módulo de perfis de acesso',
          ModuleId: 2,
        },
        {
          id: 3,
          name: 'Visualizar Permissões',
          context: 'Menu',
          action: 'view',
          resource: 'permissions',
          description: 'Permite acessar o módulo das permissões de usuário',
          ModuleId: 2,
        },
        {
          id: 4,
          name: 'Visualizar Perfil',
          context: 'Menu',
          action: 'view',
          resource: 'profile',
          description: 'Permite acessar o módulo do perfil de usuário',
          ModuleId: 3,
        },
        {
          id: 5,
          name: 'Visualizar Colaboradores',
          context: 'Menu',
          action: 'view',
          resource: 'employees',
          description: 'Permite acessar o módulo de colaboradores',
          ModuleId: 4,
        },
        {
          id: 6,
          name: 'Visualizar Férias',
          context: 'Menu',
          action: 'view',
          resource: 'vacations',
          description: 'Permite acessar o módulo de férias',
          ModuleId: 4,
        },
        {
          id: 7,
          name: 'Visualizar Atestados',
          context: 'Menu',
          action: 'view',
          resource: 'medical-certificates',
          description: 'Permite acessar o módulo dos atestados médicos',
          ModuleId: 4,
        },
        {
          id: 8,
          name: 'Visualizar Entrevistas',
          context: 'Menu',
          action: 'view',
          resource: 'interviews',
          description: 'Permite acessar o módulo de entrevistas',
          ModuleId: 4,
        },
        {
          id: 9,
          name: 'Visualizar Projetos',
          context: 'Menu',
          action: 'view',
          resource: 'projects',
          description: 'Permite acessar o módulo de projetos',
          ModuleId: 5,
        },
        {
          id: 10,
          name: 'Visualizar cargos/niveis',
          context: 'Menu',
          action: 'view',
          resource: 'levels',
          description: 'Permite acessar o módulo de cargos/níveis',
          ModuleId: 6,
        },
        {
          id: 11,
          name: 'Visualizar Requisições',
          context: 'Menu',
          action: 'view',
          resource: 'requests',
          description: 'Permite acessar o módulo de requisições',
          ModuleId: 6,
        },
        {
          id: 12,
          name: 'Visualizar Carreiras',
          context: 'Menu',
          action: 'view',
          resource: 'careers',
          description: 'Permite acessar o módulo de carreiras',
          ModuleId: 6,
        },
        {
          id: 13,
          name: 'Visualizar badges',
          context: 'Menu',
          action: 'view',
          resource: 'badges',
          description: 'Permite acessar o módulo de badges',
          ModuleId: 6,
        },
        {
          id: 14,
          name: 'Visualizar ponto',
          context: 'Menu',
          action: 'view',
          resource: 'time',
          description: 'Permite acessar o módulo de ponto',
          ModuleId: 7,
        },
        {
          id: 15,
          name: 'Visualizar Clientes',
          context: 'Menu',
          action: 'view',
          resource: 'clients',
          description: 'Permite acessar o módulo de clientes',
          ModuleId: 7,
        },
        {
          id: 16,
          name: 'Criar Perfil',
          context: 'Page',
          action: 'create',
          resource: 'roles',
          description: 'Permite criar novos perfis de usuário',
          ModuleId: 2,
        },
        {
          id: 17,
          name: 'Perfil',
          context: 'Page',
          action: 'edit',
          resource: 'roles',
          description: 'Permite editar um perfil de usuário',
          ModuleId: 2,
        },
        {
          id: 18,
          name: 'Perfil',
          context: 'Page',
          action: 'detail',
          resource: 'roles',
          description: 'Permite visualizar um perfil de usuário',
          ModuleId: 2,
        },
        {
          id: 19,
          name: 'Perfil',
          context: 'Page',
          action: 'delete',
          resource: 'roles',
          description: 'Permite remover um perfil de usuário',
          ModuleId: 2,
        },

        {
          id: 20,
          name: 'Criar Permissões',
          context: 'Page',
          action: '',
          resource: 'permissions',
          description: 'Permite criar uma nova permissão',
          ModuleId: 2,
        },
        {
          id: 21,
          name: 'Editar Permissão',
          context: 'Page',
          action: 'edit',
          resource: 'permissions',
          description: 'Permite editar uma permissão',
          ModuleId: 2,
        },
        {
          id: 22,
          name: 'Visualizar Permissão',
          context: 'Page',
          action: 'detail',
          resource: 'permissions',
          description: 'Permite visualizar detalhes de uma permissão',
          ModuleId: 2,
        },
        {
          id: 23,
          name: 'Deletar',
          context: 'Page',
          action: 'delete',
          resource: 'permissions',
          description: 'Permite remover uma permissão',
          ModuleId: 2,
        },

        {
          id: 24,
          name: 'Criar Colaborador',
          context: 'Page',
          action: 'create',
          resource: 'employee',
          description: 'Permite criar um novo colaborador',
          ModuleId: 4,
        },
        {
          id: 25,
          name: 'Editar Colaborador',
          context: 'Page',
          action: 'edit',
          resource: 'employee',
          description: 'Permite editar um colaborador existente',
          ModuleId: 4,
        },
        {
          id: 26,
          name: 'Visualizar Colaborador',
          context: 'Page',
          action: 'detail',
          resource: 'employee',
          description: 'Permite visualizar detalhes de um colaborador',
          ModuleId: 4,
        },
        {
          id: 27,
          name: 'Deletar Colaborador',
          context: 'Page',
          action: 'delete',
          resource: 'employee',
          description: 'Permite remover um colaborador',
          ModuleId: 4,
        },

        {
          id: 28,
          name: 'Solicitar Férias',
          context: 'Page',
          action: 'create',
          resource: 'vacations',
          description: 'Permite realizar um pedido de férias',
          ModuleId: 4,
        },
        {
          id: 29,
          name: 'Editar Pedido Férias',
          context: 'Page',
          action: 'edit',
          resource: 'vacations',
          description: 'Permite editar um pedido de férias',
          ModuleId: 4,
        },
        {
          id: 30,
          name: 'Visualizar Pedido de Férias',
          context: 'Page',
          action: 'detail',
          resource: 'vacations',
          description: 'Permite visualizar um pedido de férias',
          ModuleId: 4,
        },
        {
          id: 31,
          name: 'Remover Pedido de Férias',
          context: 'Page',
          action: 'delete',
          resource: 'vacations',
          description: 'Permite remover um pedido de férias',
          ModuleId: 4,
        },

        {
          id: 32,
          name: 'Submeter Atestado Médico',
          context: 'Page',
          action: 'create',
          resource: 'medical-certificates',
          description: 'Permite subter um atestado médico',
          ModuleId: 4,
        },
        {
          id: 33,
          name: 'Editar Atestado Médico',
          context: 'Page',
          action: 'edit',
          resource: 'medical-certificates',
          description: 'Permite editar um atestado médico',
          ModuleId: 4,
        },
        {
          id: 34,
          name: 'Visualizar Atestado Médico',
          context: 'Page',
          action: 'detail',
          resource: 'medical-certificates',
          description: 'Permite visualizar um atestado médico',
          ModuleId: 4,
        },
        {
          id: 35,
          name: 'Remover Atestado Médico',
          context: 'Page',
          action: 'delete',
          resource: 'medical-certificates',
          description: 'Permite remover um atestado médico',
          ModuleId: 4,
        },

        {
          id: 36,
          name: 'Agendar Entrevista',
          context: 'Page',
          action: 'create',
          resource: 'interviews',
          description: 'Permite agendar novas entrevistas',
          ModuleId: 4,
        },
        {
          id: 37,
          name: 'Editar Entrevista',
          context: 'Page',
          action: 'edit',
          resource: 'interviews',
          description: 'Permite editar uma entrevista',
          ModuleId: 4,
        },
        {
          id: 38,
          name: 'Visualizar Entrevista',
          context: 'Page',
          action: 'detail',
          resource: 'interviews',
          description: 'Permite visualizar detalhes de uma entrevista',
          ModuleId: 4,
        },
        {
          id: 39,
          name: 'Remover Entrevista',
          context: 'Page',
          action: 'delete',
          resource: 'interviews',
          description: 'Permite remover uma entrevista',
          ModuleId: 4,
        },

        {
          id: 40,
          name: 'Criar Nível',
          context: 'Page',
          action: 'create',
          resource: 'levels',
          description: 'Permite criar um nível',
          ModuleId: 6,
        },
        {
          id: 41,
          name: 'Editar Nível',
          context: 'Page',
          action: 'edit',
          resource: 'levels',
          description: 'Permite editar um nível',
          ModuleId: 6,
        },
        {
          id: 42,
          name: 'Visualizar Nível',
          context: 'Page',
          action: 'detail',
          resource: 'levels',
          description: 'Permite visualizar detlhes de um nível',
          ModuleId: 6,
        },
        {
          id: 43,
          name: 'Remover Nível',
          context: 'Page',
          action: 'delete',
          resource: 'levels',
          description: 'Permite remover um nível',
          ModuleId: 6,
        },

        {
          id: 44,
          name: 'Criar Requisição',
          context: 'Page',
          action: 'create',
          resource: 'requests',
          description: 'Permite criar uma requisição',
          ModuleId: 6,
        },
        {
          id: 45,
          name: 'Editar Requisição',
          context: 'Page',
          action: 'edit',
          resource: 'requests',
          description: 'Permite editar uma requisição',
          ModuleId: 6,
        },
        {
          id: 46,
          name: 'Visualizar Requisição',
          context: 'Page',
          action: 'detail',
          resource: 'requests',
          description: 'Permite visualizar uma requisição',
          ModuleId: 6,
        },
        {
          id: 47,
          name: 'Remover Requisição',
          context: 'Page',
          action: 'delete',
          resource: 'requests',
          description: 'Permite remover uma requisição',
          ModuleId: 6,
        },

        {
          id: 48,
          name: 'Criar Carreira',
          context: 'Page',
          action: 'create',
          resource: 'careers',
          description: 'Permite uma carreira',
          ModuleId: 6,
        },
        {
          id: 49,
          name: 'Editar Carreira',
          context: 'Page',
          action: 'edit',
          resource: 'careers',
          description: 'Permite editar uma carreira',
          ModuleId: 6,
        },
        {
          id: 50,
          name: 'Visualizar Carreira',
          context: 'Page',
          action: 'detail',
          resource: 'careers',
          description: 'Permite visualizar uma carreira',
          ModuleId: 6,
        },
        {
          id: 51,
          name: 'Remover Carreira',
          context: 'Page',
          action: 'delete',
          resource: 'careers',
          description: 'Permite remover uma carreira',
          ModuleId: 6,
        },

        {
          id: 52,
          name: 'Criar Badge',
          context: 'Page',
          action: 'create',
          resource: 'badges',
          description: 'Permite criar uma Badge',
          ModuleId: 6,
        },
        {
          id: 53,
          name: 'Editar Badge',
          context: 'Page',
          action: 'edit',
          resource: 'badges',
          description: 'Permite editar uma Badge',
          ModuleId: 6,
        },
        {
          id: 54,
          name: 'Visualizar Badge',
          context: 'Page',
          action: 'detail',
          resource: 'badges',
          description: 'Permite visualizar uma Badge',
          ModuleId: 6,
        },
        {
          id: 55,
          name: 'Delete Badge',
          context: 'Page',
          action: 'delete',
          resource: 'badges',
          description: 'Permite uma Badge',
          ModuleId: 6,
        },

        {
          id: 56,
          name: 'Bater Ponto',
          context: 'Page',
          action: 'create',
          resource: 'time',
          description: 'Permite bater um Ponto',
          ModuleId: 7,
        },
        {
          id: 57,
          name: 'Editar Ponto',
          context: 'Page',
          action: 'edit',
          resource: 'time',
          description: 'Permite editar um Ponto',
          ModuleId: 7,
        },
        {
          id: 58,
          name: 'Visualizar Ponto',
          context: 'Page',
          action: 'detail',
          resource: 'time',
          description: 'Permite visualizar detalhes de um Ponto',
          ModuleId: 7,
        },
        {
          id: 59,
          name: 'Remover Ponto',
          context: 'Page',
          action: 'delete',
          resource: 'time',
          description: 'Permite remover um Ponto',
          ModuleId: 7,
        },

        {
          id: 60,
          name: 'Criar Cliente',
          context: 'Page',
          action: 'create',
          resource: 'clients',
          description: 'Permite criar um cliente',
          ModuleId: 8,
        },
        {
          id: 61,
          name: 'Editar Cliente',
          context: 'Page',
          action: 'edit',
          resource: 'clients',
          description: 'Permite editar um cliente',
          ModuleId: 8,
        },
        {
          id: 62,
          name: 'Visualizar Cliente',
          context: 'Page',
          action: 'detail',
          resource: 'clients',
          description: 'Permite visualizar um cliente',
          ModuleId: 8,
        },
        {
          id: 63,
          name: 'Remover Cliente',
          context: 'Page',
          action: 'delete',
          resource: 'clients',
          description: 'Permite remover um cliente',
          ModuleId: 8,
        },

        {
          id: 64,
          name: 'Criar Projeto',
          context: 'Page',
          action: 'crate',
          resource: 'projects',
          description: 'Permite criar um projeto',
          ModuleId: 5,
        },
        {
          id: 65,
          name: 'Editar Projeto',
          context: 'Page',
          action: 'edit',
          resource: 'projects',
          description: 'Permite editar um projeto',
          ModuleId: 5,
        },
        {
          id: 66,
          name: 'Visualizar Projeto',
          context: 'Page',
          action: 'detail',
          resource: 'projects',
          description: 'Permite visualizar um projeto',
          ModuleId: 5,
        },
        {
          id: 67,
          name: 'Remover Projeto',
          context: 'Page',
          action: 'delete',
          resource: 'projects',
          description: 'Permite remover um projeto',
          ModuleId: 5,
        },
      ],
      {},
    ),

  down: queryInterface => queryInterface.bulkDelete('Permissions', null, {}),
};
