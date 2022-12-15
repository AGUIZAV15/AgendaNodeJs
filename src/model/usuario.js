const {Schema,  model} = require('mongoose');

//1 activo
//2 inactivo
const contactoSchema = new Schema({    
    nombre: {type: String, required: true},
    correo: {type: String,required: true},
    password: {type: String, required: true},
    status: {type: Number, default: 1}
});

module.exports = model('usuarios', contactoSchema);