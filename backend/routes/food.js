const express = require('express');
const foodController = (require('../controllers/food'));
const router = express.Router();
module.exports = router;

router.get('/:food', foodController.findFood);
//router.get('/id/:id', foodController.findFoodWithID);