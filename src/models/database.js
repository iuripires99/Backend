var Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'divez_e30d',
    'divez_e30d_user',
    '9ZLWVOVr9jzG7vVpIv4PbAgCpkJW3F9q',
    {
        host: 'dpg-cq8kie5ds78s73dl96g0-a',
        port: '5432',
        dialect: 'postgres'
    }
);

module.exports = sequelize;