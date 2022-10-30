# HTTP methods
GET http://localhost:3001/api/food/omena
Searches the food. Returns all the ingredients which name contain "omena".

GET http://localhost:3001/api/food/4002
Searching with id returns a single ingredient.

If there are no search results, an empty list is returned.

Non-valid syntax e.g. http://localhost:3001/api/food/*? returns 400.

POST http://localhost:3001/api/battle/initialize
Players' stats as a payload. Returns the progress of the match turn by turn.

Payload:

```
{   
    "player1":
        {
        "name": "Porkkana",
        "energyKcal": 33,
        "carbohydrate":5.6,
        "protein": 0.6,
        "fat": 0.2
        },
    "player2":
        {
        "name": "Omena",
        "energyKcal": 33,
        "carbohydrate":6.0,
        "protein": 0.6,
        "fat": 0.2
        }
}
```

Output:

```
[
    {
        "turn": {
            "time": 0,
            "attacker": ""
        },
        "player1": {
            "name": "Porkkana",
            "energyKcal": 33,
            "carbohydrate": 5.6,
            "protein": 0.6,
            "fat": 0.2,
            "delay": 6.4,
            "time_to_next_move": 6.4
        },
        "player2": {
            "name": "Omena",
            "energyKcal": 33,
            "carbohydrate": 6,
            "protein": 0.6,
            "fat": 0.2,
            "delay": 6.8,
            "time_to_next_move": 6.8
        }
    },

    ...

       {
        "turn": {
            "time": 38.40000000000001,
            "attacker": "Porkkana"
        },
        "player1": {
            "name": "Porkkana",
            "energyKcal": 3,
            "carbohydrate": 5.6,
            "protein": 0.6,
            "fat": 0.2,
            "delay": 6.4,
            "time_to_next_move": 4.400000000000003
        },
        "player2": {
            "name": "Omena",
            "energyKcal": 0,
            "carbohydrate": 6,
            "protein": 0.6,
            "fat": 0.2,
            "delay": 6.8,
            "time_to_next_move": 6.8
        }
    }
]
```