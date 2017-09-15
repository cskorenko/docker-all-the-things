import * as express from 'express';
import * as model from './model';

export const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
    model.connect();
});

app.listen(3000, function () {
    console.log('Example app lisening on port 3000!');
});
