const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        demand: true,
        desc: 'Direccion de la ciudad para obtener el clima'
    },
    pais: {
        alias: 'p',
        demand: true,
        desc: 'Direccion del pais para obtener el clima'
    }
}).argv;

const { getLugarLatinLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');



const obtenerDatosClima = async() => {
    const lugar = await getLugarLatinLng(argv.ciudad, argv.pais);
    if (!lugar) throw new Error(`No se pudo determinar el clima de ${argv.ciudad}, ${argv.pais}`);

    const clima = await getClima(lugar.latitud, lugar.longitud);
    if (!clima) throw new Error(`No se pudo determinar el clima de ${argv.ciudad}, ${argv.pais}`);


    return {...lugar, clima: clima };
};

obtenerDatosClima()
    .then(resp => console.log(`El clima de ${resp.direccion} es de ${resp.clima} °C`))
    .catch(err => console.log(err));