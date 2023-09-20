
$(function() {
    const socket = io();
    let nick;

    // Accedemos a elementos de DOM
    const messageForm = $('#messages-form')
    const messageBox = $('#message')
    const chat = $('#chat')

    const nickForm = $('#nick-form')
    const nickError = $('#nick-error')
    const nickName = $('#nick-name')

    const userNames = $('#usernames')

    $(document).ready(() => {
        nickName.focus()
    })

    // Eventos
    // enviamos un mensaje al servidor
    
    messageForm.submit(e => {
        e.preventDefault()
        socket.emit('enviar mensaje', messageBox.val())
        messageBox.val('')
        messageBox.focus()
    })

    // obtenemos respuesta del servidor
    socket.on('nuevo mensaje', (datos)=> {
        console.log(datos);

        let color = 'transparent'

        if (nick == datos.nom_usuario) {
            color = "#9ff4c5"
        }

        chat.append(`<div class="msg-area-mb-2 d-flex" style="background-color: ${color}"> <b>${datos.nom_usuario}: </b> <p class="msg"> ${datos.mensaje} </p> </div>`)
    })

    // evento para enviar al nuevo usuario

    nickForm.submit(e => {
        e.preventDefault() //evitar que se actualice la pagina

        socket.emit('nuevo usuario', nickName.val(), callback => {
            if (callback) {
                nick = nickName.val()
                $('#nick-wrap').hide()
                $('#content-wrap').show()
            } else {
                nickError.html('<div class="alert alert-danger"> EL usuario ya existe </div>')
            }
        })
    })

    // evento para obtener el array de usuarios conectados

    socket.on('nombre usuario', datos=>{
        let html = '';
        let color = ''
        let salir = ''

        for (let i = 0; i < datos.length; i++) {
            if (nick == datos[i]) {
                color = "green"
                salir = '<a class = "enlace-salir" href="/"> Salir </a>'
            } else {
                color = "black"
                salir =  ''
            }
            html += `<p style = "color: ${color}"> ${datos[i]} ${salir} </p>` 
        }

        userNames.html(html)

    })
})