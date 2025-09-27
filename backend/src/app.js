import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send(
    '<body style="background-color: black;"><p style="color:white;">Hello from Express!</p></body>',
  );
});

export { app };
