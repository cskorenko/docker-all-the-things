'use-strict';

import * as express from 'express';

import * as model from './model';
import { router } from './routes';

export const app = express();

app.use('/api', router);

app.listen(3000, async function () {
    await model.connect();
    console.log('Example app lisening on port 3000!');
});
