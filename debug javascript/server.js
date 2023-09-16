import express from 'express'

const app = express()

app.get('/', (req, res)=> {
    req.token = 10 + parseInt('10')
    res.text = 'secret'
    res.send("hola tú")
})

app.listen(3000, ()=> {
    console.log("corriendo en el puerto 3000");
})

