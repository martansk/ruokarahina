const foodService = require('../services/foodService');

/**
 * Fineli API works both with name and id.
 * Search query that contains both characters and numbers returns 200 OK and empty list, so added here validation for search query (can contain only numers or characters, not both).
 * If search query contains both numbers and characters, returns 400 and error message.
 * Empty search query also returns 400 and error message.
* Fineli API toimii samalla sekä nimellä että id:llä.
*/

const regex = /(^[a-zA-Zäö]+$)|(^\d*$)/; // search query may contain only numbers or characters

module.exports = {
    findFood: async (req, res) => {
        if (!req.params.food) {
            res.status(400).send('Ei ruoan nimeä tai id:tä, jota etsiä');
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