import React, {useState, useEffect} from 'react';
import { Table, Container } from 'react-bootstrap'

function QuadroSocios(){
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

    return(
        <Container className='div-quadro'>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome do Sócio</th>
                        <th>CNPJ/CPF Sócio</th>
                    </tr>
                </thead>
                <tbody>
                { socios.map(socio =>
                    <tr>
                        <td>{socio.rownum}</td>
                        <td>{socio.nome_socio}</td>
                        <td>{socio.cnpj_cpf_socio}</td>
                    </tr>
                )}
                </tbody>
            </Table>
        </Container>
    )
}

export default QuadroSocios;