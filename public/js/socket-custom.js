  // funciones que se disparen cuando enviemos informacion al servidor*/
  // on = Escuchar información
  var socket = io(); // es el mismo que esta en server.js let io = socketIO(server);
  socket.on('connect', function() {

      console.log('Conectado al servidor');

  });

  socket.on('disconnect', function() {

      console.log('DesConectado del servidor');

  });

  // emit = Enviar información al servidor de manera privada 1 a 1 (1-funcion, 2-nombre objeto, 3-funcion(callback))
  socket.emit('enviarMensaje', {
      usuario: 'Horacio Ortega',
      mensaje: 'Hola mundo'
  }, function(resp) {
      console.log('Respuesta server:', resp);
  });

  // on = Escuchar información, del mensaje enviado desde emit en server.js
  // TODOS LOS CLIENTE ESCUCHAN ESTE EVENTO
  socket.on('enviarMensaje', function(mensaje) {

      console.log('Servidor:', mensaje);
  });