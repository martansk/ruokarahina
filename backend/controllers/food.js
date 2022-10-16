const foodService = require('../services/foodService');

/*
* fineli sama hakurajapinta toimii sekä nimellä että id:llä
*/

const regex = /(^[a-zA-Z]+$)|(^\d*$)/;

module.exports = {
    findFood: (req, res) => {
        if (!req.params.food) {
            res.status(400).send('Ei ruoan nimeä tai id:tä, jota etsiä');
        }
        // hakuehto saa sisältää joko pelkkiä kirjaimia tai numeroita
        else if (!req.params.food.match(regex)) {
            res.status(400).send('non-valid input')
        }
        else {
            foodService.searchFood(req.params.food)
                .then((data) => {
                    res.send(data);
                }).catch((e) => {
                    res.send(e.message);
                });
        }
    },
};