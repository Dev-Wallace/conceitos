import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>

      <Navbar fixed='top' bg="warning" variant="light" className="mb-3">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src='https://cdn.iconscout.com/icon/free/png-256/yellow-among-us-3218516-2691063.png'
              width='30'
              height='30'
              className="d-inline-block align-top" /> {''}
              <strong>Conceitos</strong>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link fw-bolder text-dark" to="/pagina1"> Pagina1 </Link>
            <Link className="nav-link fw-bolder text-dark" to="/carros"> Carros </Link>
            <Link className="nav-link fw-bolder text-dark" to="/array"> Array </Link>
            <Link className="nav-link fw-bolder text-dark" to="/objetos"> Objetos </Link>
            <Link className="nav-link fw-bolder text-dark" to="/contador"> Contador </Link>
            <NavDropdown title="Filmes" className="show fw-bold" id="basic-nav-dropdown">
              <Link className="nav-link" to="/filmes/populares"> Filmes Populares </Link>
              <Link className="nav-link" to="/filmes/cartazes"> Filmes Em Cartaz </Link>
              <Link className="nav-link" to="/filmes/lancamentos"> Filmes Lançamentos </Link>
            </NavDropdown>
            <NavDropdown title='Séries de TV' className='show fw-bolder' id='basic-nav-dropdown' >
              <Link className="nav-link" to="/series/populares"> Séries Populares </Link>
              <Link className="nav-link" to="/series/noar"> Séries No Ar </Link>
              <Link className="nav-link" to="/series/estreia"> Séries Estrando Hoje </Link>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Menu