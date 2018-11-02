const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const data = require('./lugar/lugar');
const temperature = require('./clima/clima')

let getInfo = async(place) => {
    try {
        let location = await data(place);
        console.log(location);
        let temp = await temperature(location.latitud, location.longitud);
        return `El clima en ${place} es de ${temp} Celsius`
    } catch (e) {
        return `No se pudo determinar el clima en ${place}`
    }
}

getInfo(argv.direccion)
    .then(msg => console.log(msg))
    .catch(err => console.log(err))