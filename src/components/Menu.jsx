import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>

      <Navbar fixed='top' bg="warning" variant="light" className="mb-3">
        <Container>
          <Navbar.Brand href="#home"> <strong>React Conceitos</strong> </Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/pagina1"> <strong>Pagina1</strong> </Link>
            <Link className="nav-link" to="/carros"> <strong>Carros</strong> </Link>
            <Link className="nav-link" to="/array"> <strong>Array</strong> </Link>
            <Link className="nav-link" to="/objetos"> <strong>Objetos</strong> </Link>
            <Link className="nav-link" to="/contador"> <strong>Contador</strong> </Link>
            <Link className="nav-link" to="/filmes/populares"> <strong>Filmes Populares</strong> </Link>
            <Link className="nav-link" to="/filmes/cartazes"> <strong>Filmes Em Cartaz</strong> </Link>
            <Link className="nav-link" to="/filmes/lancamentos"> <strong>Filmes Lançamentos</strong> </Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Menu