const battleService = require('../services/battleService');

module.exports = {
    createBattle: (req, res) => {
            try {
                res.send(battleService.initializeBattle(req.body));
            } catch (e) {
                res.send(e.message);
            }
    }
};