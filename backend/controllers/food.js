const foodService = require('../services/foodService');

/*
* Jos /name/12345 => error
* Jos /name/omena => ok
* Jos /id/12345 => ok
* Jos /id/omena => error
* Parametrin
* - nimeksi tulee name jos kutsu tehdään osoitteeseen /name/:name
* - nimeksi tulee id jos kutsu tehdään osoitteeseen /id/:id
* Testaa skenaario, jossa molemmat reitit käytössä esim. /name/omena/id/123456
* HUOM! fineli sama haku rajapinta toimii myös id:llä
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
//    findFoodWithID: (req, res) => {
//        if (!req.params.id) {
//            res.send('Ei id:tä, jolla hakea');
//        } else {
//            foodService.searchFoodWithID(req.params.id)
//                .then((data) => {
//                    res.send(data);
//                }).catch((e) => {
//                    res.send(e.message);
//                });
//        }
//    }
};