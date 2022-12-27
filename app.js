const express = require('express');

const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const mainRouter = require('./routes/router');
require('dotenv').config();

mongoose
  .connect(
    process.env.MONGO_URI,
  )
  .then(() => {
    console.log('connected OK');
  })
  .catch(() => {
    throw new Error('ERROR');
  });

app.use(
  session({
    secret: 'A2b12b5c3k8',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  }),
);

app.use(
  cors({
    origin: process.env.SERVER_IP,
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  }),
);

app.use(express.json());

app.listen(4000);

app.use('/', mainRouter);


