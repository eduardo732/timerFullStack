'use strict'
const { Sequelize } = require('sequelize');
module.exports = new Sequelize('crono', 'postgres', '1234', {
    host: 'db',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    define: {
      timestamps: false
    },
});