const http = require('http');

const requestHandler = (request, response) => {
    response.end('¡Hola desde mi aplicacion web, además esta es una nueva versión!');
};

const server = http.createServer(requestHandler);

server.listen(8080, (err) => {
    if (err) {
        return console.log('Ha ocurrido un error', err);
    }
    console.log('Servidor está escuchando en el puerto 8080');
});