const battleService = require('../services/battleService');

// returns true if player got carbohydrate > 0
const checkCarbs = (player) => {
  return player.carbohydrate > 0;
};

// checks that player has no null stats
const checkStats = (player) => {
  return (
    player.energyKcal !== null &&
    player.energyKcal !== undefined &&
    player.carbohydrate !== null &&
    player.carbohydrate !== undefined &&
    player.protein !== null &&
    player.protein !== undefined &&
    player.fat !== null &&
    player.fat !== undefined
  );
};

/**
 * Calls the battleService to initialize a battle.
 * If there are no two players, returns 400 and error message.
 */
module.exports = {
  createBattle: (req, res) => {
    const player1 = req.body.player1;
    const player2 = req.body.player2;
    if (!player1 || !player2) {
      res.status(400).send('toinen pelaaja puuttuu');
    }
    if (!checkStats(player1) || !checkStats(player2)) {
      res.status(400).send('invalid payload, check players\' stats');
    }
    // if both players have no attack power (=carbohydrate), return empty array
    if (!checkCarbs(player1) && !checkCarbs(player2)) {
      res.send([]);
    } else {
      try {
        res.send(battleService.initializeBattle(req.body));
      } catch (e) {
        res.send(e.message);
      }
    }
  },
};
