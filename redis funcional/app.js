const express = require('express')
const axios = require('axios')
const responseTime = require('response-time')
const redis = require('redis')

const app = express()
app.use(responseTime())

const client = redis.createClient();
client.connect()


app.get('', (req, res) => {
    res.send("ruta raiz")
})

app.get('/character', async (req, res) => {

    console.log("entro a la ruta");

    let cache = await client.get('characters')

    if (cache) {
        console.log("desde caché");
        res.send(cache)
        
    } else {
        const respuesta = await axios.get('https://rickandmortyapi.com/api/character')
        // console.log(respuesta);

        client.set('characters', JSON.stringify(respuesta.data), (err, reply) => {
            if (err) {
                console.log("error", err);
            }
            console.log(reply);
        })
        console.log("primera vez");

        res.send(respuesta.data)
    }
})


app.listen(3000, () => {
    console.log("puerto 3000 corriendo");
})