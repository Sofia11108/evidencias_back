const express = require('express')
const path = require('path')

const app = express()

const server = require('http').Server(app)
const socketio = require('socket.io')(server)

app.set('port', process.env.PORT || 3000)

// ejecutando la función del archivo sockets.js
require('./sockets')(socketio)

// archivos estáticos
app.use(express.static(path.join(__dirname, 'public')))


let port = app.get('port')
server.listen(port, ()=> {
    console.log(`puerto corriendo en http://localhost:${port}`);
})