import React from 'react'
import { Card } from 'react-bootstrap'

const Pagina1 = () => {
  return (
    <div>
        <Card bg="dark" text="light" border="warning" style={{ width: '18rem' }} className="mb-3">
          <Card.Img variant="top" src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg" />
          <Card.Body>
            <Card.Title>Àguia</Card.Title>
            <Card.Text>
              Bicho que voa e bica.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card bg="warning" text="dark" border="dark" style={{ width: '18rem' }} className="mb-3">
          <Card.Header>Cabeçalho</Card.Header>
          <Card.Body>
            <Card.Title>Titulo</Card.Title>
            <Card.Text>
              Texto dentro do card.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card bg="light" text="primary" border="info" style={{ width: '18rem' }} className="mb-3">
          <Card.Header>Cabeçalho</Card.Header>
          <Card.Body>
            <Card.Title>Titulo</Card.Title>
            <Card.Text>
              Texto dentro do card.
            </Card.Text>
          </Card.Body>
        </Card>
    </div>
  )
}

export default Pagina1