# ruokarahina
 Solidabis koodihaaste 2022

## backend
Backend on toteutettu docker microservicenä node.js:n ja expressin avulla.

Docker ja docker compose tulee asentaa koneelle, ohjeet osoitteissa x ja y.

Docker uudelleenbuildataan ja käynnistetään komennolla
```
docker-compose up --build
```

### metodit:
GET http://localhost:3001/api/food/omena
Ruokien hakuominaisuus. Palauttaa kaikki ruoka-aineet, joiden nimessä on omena.

GET http://localhost:3001/api/food/4002
Palauttaa yksittäisen ruoka-aineen id:llä.

Väärä syntaksi hakusanassa esim. http://localhost:3001/api/food/id/4002omena palauttaa tyhjän listan.

POST http://localhost:3001/api/battle/initialize
Payloadina pelaajien statsit. Palauttaa ottelun kulun

Payload:

```
{   
    "player1":
        {
        "name": "Porkkana1",
        "energyKcal": 33,
        "carbohydrate":5.6,
        "protein": 0.6,
        "fat": 0.2
        },
    "player2":
        {
        "name": "Porkkana2",
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
            "name": "Porkkana1",
            "energyKcal": 33,
            "carbohydrate": 5.6,
            "protein": 0.6,
            "fat": 0.2,
            "delay": 6.4,
            "time_to_next_move": 6.4
        },
        "player2": {
            "name": "Porkkana2",
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
            "attacker": "Porkkana1"
        },
        "player1": {
            "name": "Porkkana1",
            "energyKcal": 3,
            "carbohydrate": 5.6,
            "protein": 0.6,
            "fat": 0.2,
            "delay": 6.4,
            "time_to_next_move": 4.400000000000003
        },
        "player2": {
            "name": "Porkkana2",
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