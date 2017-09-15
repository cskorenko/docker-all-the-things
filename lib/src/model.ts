'use strict';

import * as Sequelize from 'sequelize';

const sequelize = new Sequelize('dogs', 'username', 'somesecret123', {
    host: 'db-dev',
    dialect: 'mysql'
});

export async function connect() {
    try {
        await sequelize.authenticate();
        console.log('succesfully connected');
    } catch (e) {
        console.log('unable to connect');
    }

}
