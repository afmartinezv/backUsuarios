import { Router } from "express";
import DriverUsers from '../drivers/driversUsers.js';

const  enrutadorUser = Router();

enrutadorUser.post('/', DriverUsers.createUser);
enrutadorUser.get('/', DriverUsers.viewUsers);
enrutadorUser.get('/:id', DriverUsers.viewUser);
enrutadorUser.put('/:id', DriverUsers.updateUser);
enrutadorUser.delete('/:id', DriverUsers.deleteUser);


export default enrutadorUser;