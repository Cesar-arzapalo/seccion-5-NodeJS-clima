const axios = require('axios');

const getLugarLatinLng = async(ciudad, pais) => {

    const instance = axios.create({
        baseURL: `https://geocode.xyz/?locate=location?city=${encodeURI(ciudad)},${encodeURI(pais)}&json=1`,
        timeout: 1000,
        headers: { 'TU_API_KEY': '626781120726651148503x127476' }
    });

    const resp = await instance.get();

    if (resp.data.standard === 0) throw new Error(`No hay resultados para ${ciudad},${pais}`);

    let data = {
        direccion: `${encodeURI(ciudad)},${encodeURI(pais)}`,
        data: resp.data,
        longitud: Number.parseFloat(resp.data.longt),
        latitud: Number.parseFloat(resp.data.latt)
    };

    return data;
};


module.exports = {
    getLugarLatinLng
};