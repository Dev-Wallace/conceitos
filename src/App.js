import Menu from "./components/Menu";
import Cartao from "./components/Cartao";
import Pagina1 from "./pages/Pagina1";
import Carros from "./pages/Carros";
import Array from "./pages/Array";
import Objetos from "./pages/Objetos";
import Contador from "./pages/Contador";
import FilmesPopulares from "./pages/filmes/FilmesPopulares";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>

      <BrowserRouter>
        
        <Menu />

       <Container>   
        <Routes>
          <Route path="/" element={<Carros />} />
          <Route path="/carros" element={<Carros />} />
          <Route path="/array" element={<Array />} />
          <Route path="/objetos" element={<Objetos />} />
          <Route path="/pagina1" element={<Pagina1 />} />
          <Route path="/contador" element={<Contador />} />
          <Route path="/filmes/populares" element={<FilmesPopulares />} />
        </Routes>
       </Container>
      </BrowserRouter>

    </div>
  );
}

export default App;
