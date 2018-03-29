module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert(
      'Companies',
      [
        {
          id: 1,
          name: 'Inside',
          razaoSocial: '',
          cnpj: '',
          inscricaoEstadual: '',
          inscricaoMunicipal: '',
          streetAddress: '',
          number: 0,
          neighborhood: '',
          zipcode: '',
          city: '',
          state: '',
          country: '',
        },
        {
          id: 2,
          name: 'iFactory Solutions',
          razaoSocial: 'Ifactory Solutions Informatica Ltda',
          cnpj: '06.029.766/0001-85',
          inscricaoEstadual: '',
          inscricaoMunicipal: '',
          streetAddress: 'R Doutor Gilberto Studart, Edif Duets Office Loja 20 Torre Norte',
          number: 55,
          neighborhood: 'Coco',
          zipcode: '60192-105',
          city: 'Fortaleza',
          state: 'Ceará',
          country: 'Brasil',
        },
      ],
      {},
    ),

  down: queryInterface => queryInterface.bulkDelete('Companies', null, {}),
};
