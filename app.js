require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes/index');

const app = express();

app.use(express.json());

app.use(routes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Mongoose connected 🍃');
    app.listen(3000, () => {
      console.log('Server is up and running 🚀');
    });
  })
  .catch((error) => {
    console.log(error);
  });
