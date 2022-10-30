/**
 * Player class creates a player object based on request body.
 * Additionally, the player receives two new values, delay and time_to_next_move.
 * Delay tells how slowly the player attacks. Time_to_next_move determines, which player attacks next.
 */
class Player {
    constructor(payload) {
        this.name = payload.name;
        this.energyKcal = payload.energyKcal;
        this.carbohydrate = payload.carbohydrate;
        this.protein = payload.protein;
        this.fat = payload.fat;
        this.delay = Math.round((payload.carbohydrate + payload.protein + payload.fat) * 10) / 10;
        this.time_to_next_move = this.delay;
    }
}

/**
 * Turn class contains timestamp and the attacker of the turn in question.
 */
class Turn {
    constructor(time, attacker) {
        this.time = time;
        this.attacker = attacker;
    }
}

/**
 * Updates the values of turn's objects.
 * 
 * @param {Turn} turn On-going turn
 * @param {Player} attacker Player, who is attacker
 * @param {Player} defender Player, who is defender
 */
const attack = (turn, attacker, defender) => {
    turn.attacker = attacker.name;
    defender.energyKcal -= attacker.carbohydrate;
    turn.time += attacker.time_to_next_move;
    if (defender.energyKcal < 0) defender.energyKcal = 0; // Defender's health cannot be negative.
    else {
        defender.time_to_next_move -= attacker.time_to_next_move;
        attacker.time_to_next_move = attacker.delay;
    }
};

/**
 * Determines, which player is attacker and which defender based on time_to_next_move.
 * Then passes objects to attack-function which actually updates the values.
 * 
 * @param {Turn} turn Turn object
 * @param {Player} player1 First player
 * @param {Player} player2 Second player
 */
const createNextTurn = (turn, player1, player2) => {
    player1.time_to_next_move <= player2.time_to_next_move ? 
        attack(turn, player1, player2) :
        attack(turn, player2, player1);
};

module.exports = {
    /**
    * Creates a battle array, which contains details for each turn.
    * 
    * @param {JSON} payload Request body, contains players' details.
    * @returns Battle array.
    */
    initializeBattle: (payload) => {
        let battleArray = [];
        const player1 = new Player(payload.player1);
        const player2 = new Player(payload.player2);

        const turn = new Turn(0.0, '');

        while (player1.energyKcal > 0 && player2.energyKcal > 0) {
            createNextTurn(turn, player1, player2);
            battleArray.push(JSON.parse(JSON.stringify({ turn, player1, player2 })));
        }

        return battleArray;
    },
};