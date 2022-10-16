/*
*   Vuoro-objekti:
*
*    {
*        "turn": {
*            "time": 38.40000000000001
*            "attacker": "Porkkana1"
*        },
*        "player1": {
*            "name": "Porkkana1",
*            "energyKcal": 3,
*            "carbohydrate": 5.6,
*            "protein": 0.6,
*            "fat": 0.2,
*            "delay": 6.4,
*            "time_to_next_move": 4.400000000000003
*        },
*        "player2": {
*            "name": "Porkkana2",
*            "energyKcal": 0,
*            "carbohydrate": 6,
*            "protein": 0.6,
*            "fat": 0.2,
*            "delay": 6.8,
*            "time_to_next_move": 6.8
*        }
*    }
*
* obj.key = "value";
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

class Turn {
    constructor(time, attacker) {
        this.time = time;
        this.attacker = attacker;
    }
}

const attack = (turn, attacker, defender) => {
    turn.attacker = attacker.name;
    defender.energyKcal -= attacker.carbohydrate;
    turn.time += attacker.time_to_next_move;
    if (defender.energyKcal < 0) defender.energyKcal = 0;
    else {
        defender.time_to_next_move -= attacker.time_to_next_move;
        attacker.time_to_next_move = attacker.delay;
    }
};

// returns next turn's details = object
const createNextTurn = (turn, player1, player2) => {
    player1.time_to_next_move <= player2.time_to_next_move ? 
        attack(turn, player1, player2) :
        attack(turn, player2, player1);
};

module.exports = {
    initializeBattle: (payload) => {
        battleArray = [];
        const player1 = new Player(payload.player1);
        const player2 = new Player(payload.player2);
        const turn = new Turn(0.0, '')
        battleArray.push(JSON.parse(JSON.stringify({ turn, player1, player2 })));

        while (player1.energyKcal > 0 && player2.energyKcal > 0) {
            createNextTurn(turn, player1, player2);
            battleArray.push(JSON.parse(JSON.stringify({ turn, player1, player2 })));
        }

        return battleArray;
    },
};