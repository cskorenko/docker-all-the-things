'use strict';

import * as bunyan from 'bunyan';

const ENV = process.env.ENVIRONMENT || 'LOCAL';

export const createLogger = (name: string) => {
    return bunyan.createLogger({
        name: name,
        level: ENV === 'LOCAL' ? 'debug' : 'info'
    });
};
