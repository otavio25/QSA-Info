import React, {useState, useEffect} from 'react';
import { Container, Table, InputGroup, Form, Button } from 'react-bootstrap';

function BuscaSocio(){
    const [socios, setSocios] = useState([])
    const [name, setName] = useState()

    useEffect(()=>{
        fetch(`http://localhost:3333/buscasocio?name=${name}`)
            .then(res=>res.json())
            .then(
                (res)=>{
                    setSocios(res)
                }
            )
    })

    return(
        <Container className='div-busca'>
            <InputGroup className="mb-3" value={name} onChange={(e) => setName(e.target.value)}>
                <InputGroup.Text id="inputGroup-sizing-default"> Nome do Sócio </InputGroup.Text>
                <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
            </InputGroup>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Razão Social</th>
                        <th>Nome Fantasia</th>
                        <th>CNPJ</th>
                    </tr>
                </thead>
                <tbody>
                { socios.map(socio =>
                    <tr>
                        <td>{socio.rownum}</td>
                        <td>{socio.razao_social}</td>
                        <td>{socio.nome_fantasia}</td>
                        <td>{socio.cnpj}</td>
                    </tr>
                )}
                </tbody>
            </Table>
            <Button href="/buscasocio">Reset</Button>
        </Container>
    )
}

export default BuscaSocio;