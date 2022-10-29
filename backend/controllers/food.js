const foodService = require('../services/foodService');

/**
 * Fineli API works both with name and id.
 * If search query contains other than whitespace, numbers and characters, returns 400 and error message.
 * Empty search query also returns 400 and error message.
*/

const regex = /(^[a-zA-Zäö\d ]+$)/; // regex for food name search query

module.exports = {
  findFood: async (req, res) => {
    if (!req.params.food) {
      res.status(400).send('no food name to look for');
    }
    else if (!req.params.food.match(regex)) {
      res.status(400).send('non-valid input');
    }
    else {
      try {
        const response = await foodService.searchFood(req.params.food);
        res.send(response);
      } catch (e) {
        res.send(e.message);
      }
    }
  }
};