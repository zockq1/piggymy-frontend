import cors from 'cors';
import express from 'express';

import testRouter from './route/test';

const app = express();
const port = 9090;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: 'http://localhost:3002',
    optionsSuccessStatus: 200,
    credentials: true,
  }),
);

app.use(express.json());

app.use('/', testRouter);
app.get('/', (req, res) => res.send('Hi Claire Welcome to Node.js'));

app.listen(port, () => console.log(`Mock server is running on port: ${port}`));
