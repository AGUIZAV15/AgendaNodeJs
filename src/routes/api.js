const express = require('express');
const router = require('express').Router();
const multer = require('multer');


const contactos = require('../controller/contactos');
const usuarios = require('../controller/usuarios');
const auth = require('../middleware/auth');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads');
    },
    filename: (req, file, callback) => {
        let nombre = new Date().getTime() + '.jpg';
        callback(null, nombre);
    }
});

const upload = multer({storage: storage});

// parte contactos
router.use('/contactos', auth);
router.get('/contactos', contactos.get);
router.get('/contactos/:id', contactos.ver);
router.post('/contactos', upload.single('foto'), contactos.crear);
router.put('/contactos/:id', contactos.guardar);
router.delete('contactos/:id', contactos.eliminar);


// parte usuarios
router.post('/login',express.json(),usuarios.login);
router.post('/registro',express.json(),usuarios.registro);


module.exports = router;