const express = require('express');
const router = require('express').Router();
const contactos = require('../controller/contacto');

router.get('/contactos', contactos.get);
router.get('/contactos/:id', contactos.ver);
router.post('/contactos', express.json(), contactos.crear);
router.put('/contactos/:id', express.json(), contactos.guardar);
router.delete('contactos/:id', contactos.eliminar);

module.exports = router;