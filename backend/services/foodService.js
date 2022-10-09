const request = require('request');
const BASE_URL = 'https://fineli.fi/fineli/api/v1/foods?q='

module.exports = {
    searchFood: (foodName) => {
        return new Promise((resolve, reject) => {
            let url = BASE_URL + foodName;
            request.get(url, (error, response, body) => {
                console.log(error, response, body);
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