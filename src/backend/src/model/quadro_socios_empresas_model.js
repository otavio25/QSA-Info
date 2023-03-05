const knexfile = require('../../knexfile')
const knex = require('knex')(knexfile)

module.exports = {
    get_list_socios_empresas : () =>{
        try {
            return knex.
                    select('cds.cnpj_cpf_socio', 'cds.nome_socio', 'cdc.cnpj', 'cdc.razao_social').
                    from('cnpj_dados_cadastrais_pj as cdc').
                    innerJoin('cnpj_dados_socios_pj as cds', 'cds.cnpj', 'cdc.cnpj').
                    groupBy('cds.cnpj_cpf_socio', 'cds.nome_socio', 'cdc.cnpj', 'cdc.razao_social').
                    limit(300)
        } catch (error) {
            console.log("Erro em quadro_socios_empresas_model. O erro é: ", error.message)
        }
    }
}