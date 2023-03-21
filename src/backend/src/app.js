const express = require('express')
const app = express()
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json'); // importando arquivo swagger.json contendo todas as definições da minha API

const quadro_socios_router = require('./router/quadro_socios_router')
const busca_socio_router = require('./router/busca_socio_router')
const quadro_socios_empresas_router = require('./router/quadro_socios_empresas_router')

app.use(express.json())
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); // Definindo rota de acesso a documentação da minha API
app.use(quadro_socios_router)
app.use(busca_socio_router)
app.use(quadro_socios_empresas_router)

app.listen(3333, ()=>{
    console.log('Servidor rodando....')
})