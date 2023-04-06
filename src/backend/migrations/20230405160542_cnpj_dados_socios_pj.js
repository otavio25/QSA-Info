exports.up = function(knex) {
    return knex.schema.createTable('cnpj_dados_socios_pj', (table)=>{
        table.string('tipo_de_registro') 
        table.string('indicador') 
        table.string('tipo_atualizacao') 
        table.string('cnpj') 
        table.string('identificador_socio') 
        table.string('nome_socio') 
        table.string('cnpj_cpf_socio') 
        table.string('cod_qualificacao_socio') 
        table.string('percentual_capital_socio') 
        table.string('data_entrada_sociedade') 
        table.string('cod_pais') 
        table.string('nome_pais_socio') 
        table.string('cpf_representante_legal') 
        table.string('nome_representante') 
        table.string('cod_qualificacao_representante_legal') 
        table.string('fillter') 
        table.string('fim_registro') 
    })
};

exports.down = function(knex) { 
    return knex.schema.dropTable('cnpj_dados_socios_pj')
};
