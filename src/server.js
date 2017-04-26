import Express from 'express';

const app = Express();
const port = 3000;

app.use('/static', Express.static('static'));

app.listen(port);