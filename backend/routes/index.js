const express = require('express');
const foodRoutes = require('./food');
const router = express.Router();

router.use('/food', foodRoutes);

module.exports = router;