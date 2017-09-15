'use strict';
import * as Sequelize from 'sequelize';

export interface Dog {
    name: string;
    breed: string;
}

export const dogSchema = {
    name: {
        type: Sequelize.STRING
    },
    breed: {
        type: Sequelize.STRING
    }
};
