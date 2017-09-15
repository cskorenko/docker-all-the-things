import * as express from 'express';
export const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app lisening on port 3000!');
});
