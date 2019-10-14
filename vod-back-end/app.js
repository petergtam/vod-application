import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import routes from './routes/index';

const app = express();

mongoose.connect('mongodb://localhost:27017/movies', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// catch 400
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(400).send(`Error: ${res.originUrl} not found`);
  next();
});

// catch 500
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send(`Error: ${err}`);
  next();
});

routes(app);

export default app;
