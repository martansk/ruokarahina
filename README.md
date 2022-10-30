# Ruokarähinä - Solidabis code challenge 2022
Ruokarähinä (en. Food Brawl) is an application where user can pick the ingredients they want for the battle. After this, the details of the match and it's winner are shown to the user.

The backend of this app is implemented as a Docker microservice with Node.js and Express. Backend fetches the ingredients from [Fineli API](https://fineli.fi/fineli/fi/avoin-data) and implements the battle logic. Jest and SuperTest are used to the API.

The frontend of this app is implemented with React. The managment of application state is implemented with Redux Toolkit. Jest is used for unit testing and Cypress for E2E-testing. The UI is designed with Figma. The app is responsive, so it can be used with mobile devices and tablets. App also supports dark theme.

You can familiarize yourself with the application here: https://ruokarahina.fly.dev/

## How to run

Clone the repository
```
git clone https://github.com/martansk/ruokarahina.git
```

The app requires [Node.js](https://nodejs.org/en/) and npm installed.


### Backend

If your machine has [Docker](https://www.docker.com/) and [Docker compose](https://docs.docker.com/compose/) installed, you can start the backend with command

```
docker-compose up --build
```

Otherwise you need to install the required dependencies
```
npm install
```

And start the backend
```
npm start
```

After this, the backend runs in url http://localhost:8080

You can configure different port by creating .env file with key PORT and the port you want, e.g.
```
PORT=8080
```

Test can be run with
```
npm test
```

### Frontend

Install the required dependencies
```
npm install
```

Create .env.development file with key REACT_APP_API_BASE_URL, value is where your backend runs, e.g.
```
REACT_APP_API_BASE_URL='http://localhost:8080'
```

Start the application
```
npm start
```

After this, the frontend runs in url http://localhost:3000/

Run the unit tests
```
npm test
```

Build the app
```
npm run build
```

## The challenge
1. Nutrition contents are fetched from Fineli API (/backend/services/foodService.js).
2. /backend/services/battleService.js handles the conversion of nutrition contents into Player class.
3. Battle logic is implemented by the /backend/services/battleService.js
4. There's a visual frontend to showcase the results.

## More information
You can find more information about the backend and the frontend in the README.md file of the folder.