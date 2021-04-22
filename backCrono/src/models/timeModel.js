"use strict";
const Sequelize = require("sequelize");
const db = require("../../config/database");

const Time = db.define("times", {
  minutes: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  seconds: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Time;

