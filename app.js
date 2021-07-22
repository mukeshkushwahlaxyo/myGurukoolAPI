const express = require('express');
const app = express();

app.use(express.json());

const mongoose = require('mongoose');

const dotenv = require("dotenv");
dotenv.config({path: './config.env'});

// connection
require('./db/conn');

// routes
require('./routes/router');

// Port
const port = process.env.PORT || 3600;
app.listen(port, () => {
  console.log(`Port running on ${port}`);
});
