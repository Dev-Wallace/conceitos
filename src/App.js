import Menu from "./components/Menu";
import Cartao from "./components/Cartao";
import Pagina1 from "./pages/Pagina1";
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

        
      <Pagina1 cor="danger" titulo="Àguia americana"/>


        <h1>Hello World</h1>

        <Button variant="dark">Dark</Button>

      </Container>

    </div>
  );
}

export default App;
