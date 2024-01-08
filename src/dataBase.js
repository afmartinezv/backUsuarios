
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODBATLAS)  
    .then((dato) =>console.info("Conectado a la base de datos."))
    .catch((error)=>console.error("No Conectado a la base de datos"));