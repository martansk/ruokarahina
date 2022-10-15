const express = require('express');
const battleController = (require('../controllers/battle'));
const router = express.Router();
module.exports = router;

router.post('/initialize', battleController.createBattle);