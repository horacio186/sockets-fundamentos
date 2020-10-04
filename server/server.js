var express = require('express');
var app = express();
// libreria http con la aplicación express
var server = require('http').Server(app);
// esta variable se la pasamos a socket, engloba la aplicación http y express

// IO = esta es la comunicación del backend
// Para exportar el io para qeu se ocupe en sockets.js
//var io = require('socket.io')(server);
module.exports.io = require('socket.io')(server);
// forma de indicar que ocupe el archivo de los sockets
require('./sockets/sockets');

// cargar un middleware para cargar una vista, desde la carpeta public
app.use(express.static('public'));
const port = process.env.PORT || 3000;




// crear servidor con express, puerto y callback
server.listen(port, function() {
    console.log(`Servdor está funcionando en ${port}`);
});