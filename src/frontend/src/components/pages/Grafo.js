import React, {useState, useEffect} from "react";
import Graph from "react-vis-network-graph";

function Grafo() {
    const [socios, setSocios] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3333/quadrosocios')
            .then(res=>res.json())
            .then(
                (res)=>{
                    setSocios(res)
                }
            )
    }, [])

    const [socios_empresas, setSociosEmpresas] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3333/socio/empresa')
            .then(res=>res.json())
            .then(
                (res)=>{
                    setSociosEmpresas(res)
                }
            )
    }, [])
    
    const graph = {
        nodes: socios.map(socio => (
            {id: socio.cnpj_cpf_socio, label: socio.nome_socio, group: "socio", title: "Sócio"}))
            .concat(socios_empresas.map(empresa => (
                {id: empresa.cnpj, label: empresa.razao_social, group: "empresa", title: "Empresa"}
            ))),
        edges: socios_empresas.map(socio_empresa => ({from: socio_empresa.cnpj_cpf_socio, to:socio_empresa.cnpj}))
    };
        
    const options = {
        layout: {
            improvedLayout: true
        },
        edges: {
            color: "#efefef"
        },
        groups: {
            socio: {color:{background:'#2ADACC'}, borderWidth:1},
            empresa: {color:{background:'#CDDA2A'}, borderWidth:1}
        },
        height: "500px"
    };
    
    const events = {
        select: function(event) {
            var { nodes, edges } = event;
        }
    };
    return (
        <Graph
            graph={graph}
            options={options}
            events={events}
        />
    );
}

export default Grafo