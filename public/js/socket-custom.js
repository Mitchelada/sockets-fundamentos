 //Parte del front end
 let socket = io();

 socket.on('connect', () => {
     console.log('Conectado al servidor');
 })

 // Escuchar - ON
 socket.on('disconnect', () => {
     console.log("Perdimos la conexion con el servidor");
 })

 // Enviar informacion - EMIT
 // argumento 1  = evento
 // argumento 2 = mensaje
 // argumento 3 = callback
 socket.emit('enviarMensaje', {
     usuario: 'Michel',
     mensaje: 'Hola mundo'
 }, (resp) => {
     console.log('respuesta server: ', resp);
 })

 //Escuchar info
 socket.on('enviarMensaje', (mensaje) => {
     console.log('Servidor: ', mensaje);
 })