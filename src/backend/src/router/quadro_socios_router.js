const express = require('express')
const router = express('router')
const controller = require('../controller/quadro_socios_controller')

router.get("/quadrosocios", controller.get)

module.exports = router