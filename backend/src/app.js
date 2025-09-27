import express from 'express';
import { postsRoutes } from './routes/posts.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(cors());

postsRoutes(app);

app.get('/', (req, res) => {
  res.send(
    '<body style="background-color: black;"><p style="color:white;">Hello from Express Nodemon!</p></body>',
  );
});

export { app };
