const model = require('../model/quadro_socios_model')

module.exports = {
    get : async(req, res)=>{
        try {
            const list = await model.get_list_socios()
            return res.status(200).json(list)
        } catch (error) {
            console.log("O erro é: ", error.message)
            return res.status(500).json("Erro no servidor: ", error.message)
        }
    }
}