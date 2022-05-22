const http = require('http');

const routes = require('./routes');

const server = http.createServer(routes.handler);
const port = 3000;

server.listen(port);