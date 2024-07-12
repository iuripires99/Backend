var Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'divez_edve',
    'divez_edve_user',
    'tBPLEtXRjLtifuYzeipXdJ0w88bEItQm',
    {
        host: 'dpg-cq8kei8gph6c73fmoi30-a',
        port: '5432',
        dialect: 'postgres'
    }
);

module.exports = sequelize;