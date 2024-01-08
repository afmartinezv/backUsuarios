import  ModelsUsers  from "../models/modelsUsers.js";

const DriverUsers = {
createUser: async (request,response) => {
    try {
        const newUser = new ModelsUsers(request.body);
        const userCreate = await newUser.save();
        if(userCreate._id){
            response.json({
                resultado: 'bien',
                mensaje: 'Usuario creado',
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
            result: 'bien',
            message: 'todos los regalos', 
            datos: users});
    } catch (error) {
        response.json({
            result: 'mal',
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
        resultado: 'bien',
        mensaje: 'regalo actualizado',
        datos: actualizado._id,
      });
    } catch (error) {
        response.json({
          resultado: 'mal',
          mensaje: 'ocurrió un error',
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
            result: 'bien',
            message: 'Todos los Usuario eliminado', 
            datos: del._id
        });
    } catch (error) {
        response.json({
            result: 'mal',
            message: 'Ocurrio un error',
            datos: error,
        });
    }
},
};

export default DriverUsers;