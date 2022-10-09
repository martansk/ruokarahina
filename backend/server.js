const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const routes = require('./routes/index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());
app.use('/api/', routes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.info('Server running on port ${PORT}');
});