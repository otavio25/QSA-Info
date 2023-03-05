const { get_list_socios_empresas } = require('../model/quadro_socios_empresas_model')
const model = require('../model/quadro_socios_empresas_model')

module.exports = {
    get : async(req, res)=>{
        try {
            const list = await model.get_list_socios_empresas()
            if(Object.keys(list).length === 0){
                return res.status(204).json("Nenhum registro encontrado!")
            }
            else{
                return res.status(200).json(list)
            }
        } catch (error) {
            console.log("O erro é: ", error.message)
        }
    }
}