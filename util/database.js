const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Sharpenarian1998',{
    dialect: 'mysql',
    host: 'localhost'
} )
module.exports = sequelize;