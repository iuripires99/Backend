var Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'divez_y9se',
    'divez_y9se_user',
    'LQSenHGJ9jQSiVLA2qnRRj7ps2039K5k',
    {
        host: 'dpg-cq884p6ehbks738fbsig-a',
        port: '5432',
        dialect: 'postgres'
    }
);

module.exports = sequelize;