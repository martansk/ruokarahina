const axios = require('axios');
// ruoan nimellä hakeminen tapahtuu esim. https://fineli.fi/fineli/api/v1/foods?q=omena
const BASE_URL = 'https://fineli.fi/fineli/api/v1/foods?q='

const searchFood = async (foodName) => {
    try {
        const data = await axios.get(BASE_URL + foodName);
        return data.data;
    } catch (e) {
        console.log(e);
    }
};

module.exports = {
    searchFood
};