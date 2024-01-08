import 'dotenv/config';
import './dataBase.js';
import server from './server.js';

const puerto = server.get('port');

//puerto por donde se va a escuchar solicitudes el sevidor
server.listen(puerto, () => {
    console.log(`Servidor ejecutandose en el puerto: ${puerto}`);
});