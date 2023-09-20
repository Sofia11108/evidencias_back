module.exports = (io) => {

    let ArrayNickNames = [] 

    io.on('connection', socket=> {
        console.log("usuario conectado");

        // al recibir un mensaje recojemos los datos  
        socket.on('enviar mensaje', (datos)=> {
            console.log(datos);

            io.sockets.emit('nuevo mensaje', {
                mensaje: datos,
                nom_usuario : socket.nickname
            })
        })

        socket.on('nuevo usuario', (datos, callback) => {
            if (ArrayNickNames.indexOf(datos) == -1) {
                
                callback(true)
                socket.nickname = datos
                ArrayNickNames.push(socket.nickname)

                io.sockets.emit('nombre usuario', ArrayNickNames)
            } else {
                callback(false)
            }
        })

        socket.on('disconnect', datos=> {
            if (!socket.nickname) {
                return;
            } else {
                ArrayNickNames.splice(ArrayNickNames.indexOf(socket.nickname), 1)
                io.sockets.emit('nombre usuario', ArrayNickNames)
            }
        })

    })
}
