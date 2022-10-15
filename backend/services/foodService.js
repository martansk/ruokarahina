const request = require('request');
//const axios = require('axios');
// ruoan nimellä hakeminen tapahtuu esim. https://fineli.fi/fineli/api/v1/foods?q=omena
const BASE_URL = 'https://fineli.fi/fineli/api/v1/foods?q='
// ruoan id:llä hakeminen tapahtuu esim. https://fineli.fi/fineli/api/v1/foods/11060

module.exports = {
    searchFood: (foodName) => {
        return new Promise((resolve, reject) => {
            let url = BASE_URL + foodName;
            request.get(url, (error, response, body) => {
                if(error) {
                    reject(error);
                } else if(response && response.statusCode === 200) {
                    resolve(body);
                } else {
                    reject (body);
                }
            })
        })
  }
};