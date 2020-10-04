// El codigo se trajo desde el server.js para limpiar ese archivo

// importamos io desde server.js
const { io } = require('../server');

// Lanzar eventos con socket, el primero conecction, se envia al ciente desde el servidor
io.on('connection', function(socket) {
    // Rescatar la ip
    console.log("El cliente con IP: " + socket.handshake.address + " Se ha conectado..");

    // emitir un mensaje para que el cliente lo escuche
    socket.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenidos a esta aplicación'
    });

    // cliente se desconecta de la sesion
    socket.on('disconnect', function() {
        console.log(socket.name + ' ha desconectado del chat.' + socket.id);
    });

    // Escuchar el cliente, se agrega la función que se definio en el emit de index.html
    socket.on('enviarMensaje', (data, callback) => {

        console.log(data); // para probar
        // la propiedad broadcast se agrega despues de socket para que todos los usuarios vean los mensajes
        socket.broadcast.emit('enviarMensaje', { // socket.emit('enviarMensaje',data); tb puede ser asi
            usuario: data.usuario,
            mensaje: data.mensaje
        });

        // Si viene el usuario, con el callback podemos indicar que salio ok o hay un error
        /*    if (mensaje.usuario) {
                // funcion que quier llamar cuando sale todo bien
                callback({
                    resp: 'TODO SALIO BIEN!'
                });
            } else {
                callback({
                    resp: 'TODO SALIO MAL!!!!'
                });
            }*/
    });

});