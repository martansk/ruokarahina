const bodyParser = require("body-parser");
const cors = require('cors');
const routes = require('./routes/index');
const express = require('express');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use('/api/', routes);
app.use(express.static('build'))

module.exports = app;