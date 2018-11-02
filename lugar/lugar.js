const axios = require('axios');

module.exports = async(direccion) => {
    let encodeUrl = encodeURI(direccion);

    let res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)

    if (res.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    //console.log(JSON.stringify(resp.data, null, 2));
    let address = res.data.results[0].formatted_address
    let latitud = res.data.results[0].geometry.location.lat
    let longitud = res.data.results[0].geometry.location.lng

    return {
        direccion: address,
        latitud,
        longitud
    }
}