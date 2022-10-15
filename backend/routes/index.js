const express = require('express');
const foodRoutes = require('./food');
const battleRoutes = require('./battle');
const router = express.Router();

router.use('/food', foodRoutes);
router.use('/battle', battleRoutes);

module.exports = router;