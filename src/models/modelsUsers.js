import { Schema, model } from "mongoose";

const esquemaUsers = new Schema({
    username: {type:String, required: true},
    firstname: {type:String, required: true},
    lastname: {type:String, required: true},
    cc: {type:Number, required: true},
    email: {type:String, required: true},
    password: {type:String, required: true},
    
},

    {versionKey: false, timestamps:true}

);

export default model ("User", esquemaUsers);