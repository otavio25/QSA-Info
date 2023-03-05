const express = require('express')
const router = express('router')
const controller = require('../controller/busca_socio_controller')

router.get("/buscasocio", controller.get)

module.exports = router