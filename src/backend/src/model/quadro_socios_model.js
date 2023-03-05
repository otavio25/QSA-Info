const knexfile = require('../../knexfile')
const knex = require('knex')(knexfile)

module.exports = {
    //lista 300 socios
    get_list_socios : () =>{
        try{
            
            return knex.
                    select('cnpj_cpf_socio', 'nome_socio').
                    rowNumber('rownum', function(){
                        this.orderBy('cnpj_cpf_socio')
                    }).
                    from('cnpj_dados_socios_pj').
                    groupBy('cnpj_cpf_socio', 'nome_socio').
                    limit(300)
        }
        catch(error){
            console.log("Erro em quadro_socios_model. O erro é: ", error.message)
        }
    }
}