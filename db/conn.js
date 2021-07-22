const mongoose = require('mongoose');
const express = require('express');
const app = express();


// Database
const uri = process.env.DATABASE;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
}).then( () => {
  console.log('Database Connected');
}).catch( (err) => console.log(`Not connected ${err}`));
