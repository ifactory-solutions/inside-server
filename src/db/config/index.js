const fs = require('fs');

module.exports = {
  development: {
    username: 'root',
    password: '123456',
    database: 'inside',
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
    seederStorage: 'sequelize',
  },
  development_docker: {
    username: 'root',
    password: '123456',
    database: 'inside',
    host: 'mysql',
    port: '3306',
    dialect: 'mysql',
    seederStorage: 'sequelize',
  },
  test: {
    username: 'root_test',
    password: null,
    database: 'inside_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'mysql',
  },
};
