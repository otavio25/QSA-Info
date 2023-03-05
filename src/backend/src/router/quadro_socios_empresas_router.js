const express = require('express')
const router = express('router')
const controller = require('../controller/quadro_socios_empresas_controller')

router.get("/socio/empresa", controller.get)

module.exports = router