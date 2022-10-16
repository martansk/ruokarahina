const bodyParser = require("body-parser");
const cors = require('cors');
const routes = require('./routes/index');
const express = require('express');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());
app.use('/api/', routes);

module.exports = app;