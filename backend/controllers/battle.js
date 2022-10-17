const battleService = require('../services/battleService');

/**
* Calls the battleService to initialize a battle.
* If there are no two players, returns 400 and error message.
*/
module.exports = {
    createBattle: (req, res) => {
        if(!req.body.player1 || !req.body.player2) {
            res.status(400).send('toinen pelaaja puuttuu');
        } else {
            try {
                res.send(battleService.initializeBattle(req.body));
            } catch (e) {
                res.send(e.message);
            }
        }
    }
};