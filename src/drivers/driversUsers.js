import  ModelsUsers  from "../models/modelsUsers.js";

const DriverUsers = {
createUser: async (request,response) => {
    try {
        const newUser = new ModelsUsers(request.body);
        const userCreate = await newUser.save();
        if(userCreate._id){
            response.json({
                resultado: 'Bien',
                mensaje: 'Usuario Creado',
                datos: userCreate._id});
        }
    } catch (error) {
        response.json({message: 'Ocuriro un error'
    });
    }
},
viewUsers:async (request,response) => {
    try {
        const fullUsers = await ModelsUsers.find();
        const users = [];
        for (let i=0; i < fullUsers.length; i++){
            const objeto ={
                id: fullUsers[i]._id,
                username: fullUsers[i].username,
            };
            users.push(objeto);
        }
        response.json({
            result: 'Bien',
            message: 'Todos los usuarios', 
            datos: users});
    } catch (error) {
        response.json({
            result: 'Mal',
            message: 'Ocurrio un error',
            datos: error
        });
    }
},

viewUser:async (request,response) => {
    try {
        const users = await ModelsUsers.findById(request.params.id);
        response.json({message: 'Usuario Leido', users});
    } catch (error) {
        response.json({message: 'Ocurrio un error'});
    }
},
updateUser: async (request, response) => {
    try {
      const actualizado = await ModelsUsers.findByIdAndUpdate(
        request.params.id,
        request.body
      );
      response.json({
        resultado: 'Bien',
        mensaje: 'Usuario Actualizado',
        datos: actualizado._id,
      });
    } catch (error) {
        response.json({
          resultado: 'Mal',
          mensaje: 'Ocurrió un error',
          datos: error,
        });
      }
    },
deleteUser:async (request,response) => {
    try {
        const del = await ModelsUsers.findByIdAndDelete(
            request.params.id
        );
        response.json({
            result: 'Bien',
            message: 'Usuario Eliminado', 
            datos: del._id
        });
    } catch (error) {
        response.json({
            result: 'Mal',
            message: 'Ocurrio un error',
            datos: error,
        });
    }
},
};

export default DriverUsers;