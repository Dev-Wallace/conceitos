import Menu from "./components/Menu";
import Cartao from "./components/Cartao";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardGroup, Container, Nav, Navbar } from "react-bootstrap";

function App() {
  return (
    <div>


      <Menu />

      <Cartao titulo="Imagem" imagem="https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg">
        <p>Exemplo de imagem</p>
        <Button variant="danger">Detalhes</Button>
      </Cartao>

      <Container>

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


        <h1>Hello World</h1>

        <Button variant="dark">Dark</Button>

      </Container>

    </div>
  );
}

export default App;
