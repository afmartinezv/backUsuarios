import  ModelsUsers  from "../models/modelsUsers.js";

const DriverUsers = {
createUser: async (request,response) => {
    try {
        const newUser = new ModelsUsers(request.body);
        const userCreate = await newUser.save();
        if(userCreate._id){
            response.json({message: 'Usuario creado'});
        }
    } catch (error) {
        response.json({message: 'Ocuriro un error'});
    }
},
viewUsers:async (request,response) => {
    try {
        const fullUsers = await ModelsUsers.find();
        response.json({message: 'Todos los usuarios', fullUsers});
    } catch (error) {
        response.json({message: 'Ocurrio un error'});
    }
},

viewUser:async (request,response) => {
    try {
        const users = await ModelsUsers.findById(request.params.id);
        response.json({message: 'Todos los usuarios', users});
    } catch (error) {
        response.json({message: 'Ocurrio un error'});
    }
},
updateUser:(request,response) => {
    response.json({message: 'Hola desde PUT regalos'});
},
deleteUser:async (request,response) => {
    try {
        const del = await ModelsUsers.findByIdAndDelete(request.params.id);
        response.json({message: 'Todos los usuarios', del});
    } catch (error) {
        response.json({message: 'Ocurrio un error'});
    }
},
};

export default DriverUsers;