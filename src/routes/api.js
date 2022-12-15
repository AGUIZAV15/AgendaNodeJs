const express = require('express');
const router = require('express').Router();
const contactos = require('../controller/contacto');
const usuarios = require('../controller/usuarios');

// parte contactos
router.get('/contactos', contactos.get);
router.get('/contactos/:id', contactos.ver);
router.post('/contactos', express.json(), contactos.crear);
router.put('/contactos/:id', express.json(), contactos.guardar);
router.delete('contactos/:id', contactos.eliminar);

// parte usuarios
router.post('/login',express.json(),usuarios.login);
router.post('/registro',express.json(),usuarios.registro);


module.exports = router;