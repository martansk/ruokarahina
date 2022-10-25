require('dotenv').config()

const app = require('./app.js');
const PORT = 8080;
app.listen(PORT, '0.0.0.0', () => {
    console.info('Server running on port ${PORT}');
});