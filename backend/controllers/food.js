const foodService = require('../services/foodService');

/*
* fineli sama hakurajapinta toimii sekä nimellä että id:llä
*/

module.exports = {
    findFood: (req, res) => {
        //console.log(req.params);
        if (!req.params.food) {
            res.send('Ei ruoan nimeä tai id:tä, jota etsiä');
        } else {
            foodService.searchFood(req.params.food)
                .then((data) => {
                    res.send(data);
                }).catch((e) => {
                    res.send(e.message);
                });
        }
    },
};