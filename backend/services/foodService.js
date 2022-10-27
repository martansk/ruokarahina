const axios = require('axios');
const BASE_URL = 'https://fineli.fi/fineli/api/v1/foods?q='; // searching with food name, example: https://fineli.fi/fineli/api/v1/foods?q=omena

/**
 * Calls the Fineli API with the search conditions given by user.
 * 
 * @param {String} foodName The name of the food.
 * @returns Search response as JSON.
 */
const searchFood = async (foodName) => {
  try {
    const data = await axios.get(BASE_URL + foodName);
    return data.data;
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = {
  searchFood
};