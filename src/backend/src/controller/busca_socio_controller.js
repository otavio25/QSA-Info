const model = require('../model/busca_socio_model')

module.exports = {
    get : async(req, res)=>{
        try {
            const {name} = req.query
            const result = await model.get_busca_socio(name)
            return res.status(200).json(result)
        } catch (error) {
            console.log("O erro é : ", error.message)
            return res.status(500).json("Erro no servidor: ", error.message)
        }
    }
}