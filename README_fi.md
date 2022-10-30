# Ruokarähinä - Solidabis koodihaaste 2022
Ruokarähinä-sovelluksessa käyttäjä voi valita haluamansa ruoka-aineet taisteluun. Tämän jälkeen käyttäjälle näytetään ottelun kulku.

Sovelluksen backend on toteutettu docker microservicenä node.js:n ja expressin avulla. Backendissä suoritetaan ruoka-aineiden haku Fineli API:a käyttäen ja taistelulogiikka. API:n testaamiseen on käytetty Jest ja SuperTest-kirjastoja.

Sovelluksen frontend on toteutettu Reactilla. Sovelluksen tilan hallinta on toteutettu Redux Toolkit-kirjastoa käyttäen. Yksikkötestit on suoritettu Jestillä ja end-to-end testit Cypressilla. Ulkoasu on suunniteltu Figmalla. Sovellus on responsiivinen, eli se toimii mobiililaitteilla ja tabletilla. Sovellus tukee myös dark theme-asetusta.

Voit halutessasi tutustua sovellukseen osoitteessa: https://ruokarahina.fly.dev/

## Ohjeet

Kloonaa repo komennolla
```
git clone https://github.com/martansk/ruokarahina.git
```

Koneelle tulee olla asennettuna Node.js ja npm.

### Backend

Mikäli koneelle on asennettu Docker ja Docker compose, voit käynnistää backendin komennolla
```
docker-compose up --build
```

Muussa tapauksessa asenna ensin tarvittavat kirjastot komennolla
```
npm install
```

Ja käynnistä backend komennolla
```
npm start
```

Tämän jälkeen backend on saatavilla osoitteessa http://localhost:8080

Testit voi ajaa komennolla
```
npm test
```

### Frontend

Asenna tarvittavat kirjastot
```
npm install
```



Käynnistä sovellus
```
npm start
```

Sovellus aukeaa osoitteeseen http://localhost:3000/

Tilanhallinnan yksikkötestit voi ajaa komennolla
```
npm test
```

Sovelluksen voi buildata komennolla
```
npm run build
```

## Lisätietoa
Lisätietoa backendin ja frontendin toiminnasta kunkin kansion README.md tiedostossa.