const {Schema,  model} = require('mongoose');

//1 activo
//2 inactivo
const contactoSchema = new Schema({    
    nombre: {type: String},
    telefono: {type: String},
    correo: {type: String},
    userId: {type: String},
    status: {type: Number, default: 1}
});

module.exports = model('contactos', contactoSchema);