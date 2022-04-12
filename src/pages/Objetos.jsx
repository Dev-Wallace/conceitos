import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

const Objetos = () => {

  const carros = [
    { marca: 'VW', modelo: 'Fusca', cor: 'Branco', ano: 1980, foto: 'https://conteudo.imguol.com.br/c/entretenimento/84/2020/10/26/volkswagen-fusca-itamar-inflacionado-1603745128011_v2_450x337.jpg' },
    { marca: 'Nissan', modelo: 'Skyline', cor: 'Azul', ano: 1994, foto: 'https://img.r7.com/images/2014/12/09/6qqjb5qlj9_72itisfjtc_file.jpg?dimensions=771x420&no_crop=true' },
    { marca: 'Toyota', modelo: 'Supra', cor: 'Laranja', ano: 1993, foto: 'https://img.remediosdigitales.com/f81b7e/the-fast-and-the-furious--2-/450_1000.jpg' },
    { marca: 'Mazda', modelo: 'RX-7', cor: 'Amarelo', ano: 2000, foto: 'https://bringatrailer.com/wp-content/uploads/2018/09/1993_mazda_rx-7_1537828769ad3ada4dDSC_0005.jpg?fit=940%2C602' },
    { marca: 'Nissan', modelo: 'Silvia S15', cor: 'Azul/Laranja', ano: 1991, foto: 'https://i.pinimg.com/originals/6b/da/49/6bda49fccc8c9fe1677556eefdd96fd6.jpg' },
    { marca: 'VW', modelo: 'Fusca', cor: 'Branco', ano: 1980, foto: 'https://conteudo.imguol.com.br/c/entretenimento/84/2020/10/26/volkswagen-fusca-itamar-inflacionado-1603745128011_v2_450x337.jpg' },
    { marca: 'Nissan', modelo: 'Skyline', cor: 'Azul', ano: 1994, foto: 'https://img.r7.com/images/2014/12/09/6qqjb5qlj9_72itisfjtc_file.jpg?dimensions=771x420&no_crop=true' },
    { marca: 'Toyota', modelo: 'Supra', cor: 'Laranja', ano: 1993, foto: 'https://img.remediosdigitales.com/f81b7e/the-fast-and-the-furious--2-/450_1000.jpg' },
    { marca: 'Mazda', modelo: 'RX-7', cor: 'Amarelo', ano: 2000, foto: 'https://bringatrailer.com/wp-content/uploads/2018/09/1993_mazda_rx-7_1537828769ad3ada4dDSC_0005.jpg?fit=940%2C602' },
    { marca: 'Nissan', modelo: 'Silvia S15', cor: 'Azul/Laranja', ano: 1991, foto: 'https://i.pinimg.com/originals/6b/da/49/6bda49fccc8c9fe1677556eefdd96fd6.jpg' },
    { marca: 'Nissan', modelo: 'Skyline', cor: 'Azul', ano: 1994, foto: 'https://img.r7.com/images/2014/12/09/6qqjb5qlj9_72itisfjtc_file.jpg?dimensions=771x420&no_crop=true' },
    { marca: 'Toyota', modelo: 'Supra', cor: 'Laranja', ano: 1993, foto: 'https://img.remediosdigitales.com/f81b7e/the-fast-and-the-furious--2-/450_1000.jpg' },
  ]

  return (
    <div>
      <h1>Objetos</h1>
      <h2>Carros</h2>


      <Row md={4} className="g-4">
        {carros.map(item => (
          <Col>
            <Card bg="light" text="dark" border="dark">
              <Card.Img height={180} variant="top" src={item.foto} />
              <Card.Body>
                <Card.Title>{item.marca + '-' + item.modelo}</Card.Title>
                <Card.Text><strong>Cor: </strong>{item.cor}</Card.Text>
                <Card.Text><strong>Ano: </strong>{item.ano}</Card.Text>
                <Button variant="warning"> <strong>Mais detalhes</strong> </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Objetos