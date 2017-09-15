'use-strict';

import * as express from 'express';
export const router = express.Router();

router.get('/dogs', (req, res) => {
    res.send('dogs');
});
