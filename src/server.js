import express from 'express';
import enrutadorUser from './router/routerUsers.js';

const server = express();
const puerto = process.env.PORT;

server.set('port', puerto);
server.use(express.json());
server.use('/users/', enrutadorUser);

server.get('/', (request,response) => {
    response.json({message: 'Hola desde la raiz'});
});

export default server;