const { post_busca_socio } = require('../model/busca_socio_model')
const model = require('../model/busca_socio_model')

module.exports = {
    get : async(req, res)=>{
        try {
            const {name} = req.query

            const result = await model.get_busca_socio(name)
            if(Object.keys(result).length === 0){
                return res.status(204).json("Nenhum registro encontrado!")
            }
            else{
                return res.status(200).json(result)
            }
        } catch (error) {
            console.log("O erro é : ", error.message)
        }
    }
}