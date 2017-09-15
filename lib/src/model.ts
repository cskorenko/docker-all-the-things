'use strict';

import * as Sequelize from 'sequelize';

import { dogSchema } from './schemas';
import { createLogger } from './config';

const logger = createLogger('model');

const sequelize = new Sequelize('dogs', 'username', 'somesecret123', {
    host: 'db-dev',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
  }
});

export async function connect() {
    try {
        await sequelize.authenticate();
        await init();
        logger.info('succesfully connected');
    } catch (e) {
        logger.error('unable to connect');
    }

}

export const Dog = sequelize.define('dogs', dogSchema);

async function init() {
    await Dog.sync();
}
