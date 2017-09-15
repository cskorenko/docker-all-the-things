'use-strict';

import * as express from 'express';
import { router as dogs } from './dogs';

export const router = express.Router();

router.use('dogs', dogs);

router.get('/', (req, res) => {
    res.send('root');
});


