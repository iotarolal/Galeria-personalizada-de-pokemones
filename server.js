const express = require('express');
//const yargs = require('yargs');
//const Jimp = require('jimp');

const app = express();
//const fs = require('fs');
app.use(express.static('static'));

//app.get('/procesar', async(req, res) => {
//    let archivo = req.query.foto;
//   const imagen = await Jimp.read(archivo);
//    await imagen.resize(350, Jimp.AUTO).rgba(false).quality(60).grayscale().writeAsync('img/newImg.jpg')
//
//    fs.readFile('img/newImg.jpg', (err, imagen) => {
//        res.writeHead(200, { 'Content-Type': 'image/jpeg' })
//        res.end(imagen)
//    })

//});

let puerto = 3003;

//yargs.command(
//    'start',
//    'comando para echar a correr el servidor', {
//        key: {
//            describe: 'clave secreta para iniciar el servidor',
//            demand: true,
//            alias: 'k'
//        }
//    },
//    function(args) {

//        if (args.key != '123') {
//            console.log('clave incorrecta')
//            return 1;
//        };

//        app.listen(puerto, () => {
//            console.log(`servidor corriendo en el puerto ${puerto}`);
//        });

//    }
//).help().argv;


// ejemplo Pokeapi - Ejercicio propuesto

app.get('/pokemon', async (req, res) => {

    try {
        const datos = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10`)
        const pokemones = datos.data.results[0]
        console.log(pokemones);
    } catch (err) {
        console.log(err);
    }

    Promise.all([
            Axios.get(pokeapi[0].url),
            Axios.get(pokeapi[2].url),
            Axios.get(pokeapi[3].url),
            Axios.get(pokeapi[4].url),
            Axios.get(pokeapi[5].url),
            Axios.get(pokeapi[6].url),
            Axios.get(pokeapi[7].url),
            Axios.get(pokeapi[8].url),
            Axios.get(pokeapi[9].url),
            Axios.get(pokeapi[10].url)

    ]).then(function(listapokemon){
        
        
    }).catch((err) =>
        console.log('error',err);
    )}

    res.send(pokeapi.url);
})

app.listen(puerto, () => {
    console.log(`servidor corriendo en el puerto ${puerto}`);
});

