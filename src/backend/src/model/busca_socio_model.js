const knexfile = require('../../knexfile')
const knex = require('knex')(knexfile)

module.exports = {
    get_busca_socio : (nome)=>{
        try{
            return knex.
                    select('dc.cnpj', 'dc.razao_social', 'dc.nome_fantasia').
                    rowNumber('rownum', function(){
                        this.orderBy('dc.nome_fantasia')
                    }).
                    from('cnpj_dados_cadastrais_pj as dc').
                    innerJoin('cnpj_dados_socios_pj as ds', 'ds.cnpj', 'dc.cnpj').
                    where('ds.nome_socio', nome).
                    groupBy('dc.cnpj', 'dc.razao_social', 'dc.nome_fantasia')
        }
        catch(error){
            console.log("Erro em busca_socio_model. O erro é:", error.message)
        }
    }
}