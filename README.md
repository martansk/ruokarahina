# ruokarahina
 Solidabis koodihaaste 2022

## backend
Backend on toteutettu docker microservicenä node.js:n ja expressin avulla.

Docker ja docker compose tulee asentaa koneelle, ohjeet osoitteissa x ja y.

Docker uudelleenbuildataan ja käynnistetään komennolla
docker-compose up --build

### metodit:
GET http://localhost:3000/api/food/omena
Ruokien hakuominaisuus. Palauttaa kaikki ruoka-aineet, joiden nimessä on omena.

GET http://localhost:3000/api/food/4002
Palauttaa yksittäisen ruoka-aineen id:llä.

Väärä syntaksi hakusanassa esim. http://localhost:3000/api/food/id/4002omena palauttaa tyhjän listan.