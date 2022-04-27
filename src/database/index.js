const sequelize = require('sequelize');
const dbConfig = require('../config/database');

const coletor = require('../models/coletor');

const connection = new sequelize(dbConfig);

coletor.init(connection);

modules.exports = connection;