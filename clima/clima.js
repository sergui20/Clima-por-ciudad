const axios = require('axios');

module.exports = async(lat, lng) => {
    let weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=f369635965b00ad16ced5da4da4b9f3b`)

    if (lat > 180 || lng > 90) {
        throw new Error('No hay resultados para la latitud o longitud ingresados')
    }

    let temp = weather.data.main.temp

    return temp
}