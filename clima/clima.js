const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4aae01131186b13e42bbd2b5b94bd23a&units=metric`);
    return resp.data.main.temp;

};
module.exports = {
    getClima
};