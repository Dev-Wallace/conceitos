import React from 'react'
import { Card } from 'react-bootstrap'

const Cartao = (props) => {
    return (
        <div>
            <Card bg="dark" text="light" border="warning" style={{ width: '18rem' }} className="mb-3">
                <Card.Img variant="top" src={props.imagem} />
                <Card.Body>
                    <Card.Title>{props.titulo}</Card.Title>
                    <Card.Text>
                        {props.children}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>


    )
}

export default Cartao