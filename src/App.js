import Menu from "./components/Menu";
import Pagina1 from "./pages/Pagina1";
import Carros from "./pages/Carros";
import Array from "./pages/Array";
import Objetos from "./pages/Objetos";
import Contador from "./pages/Contador";
import FilmesPopulares from "./pages/filmes/FilmesPopulares";
import FilmesDetalhes from "./pages/filmes/FilmesDetalhes";
import FilmesCartazes from "./pages/filmes/FilmesCartazes";
import FilmesLancamentos from "./pages/filmes/FilmesLancamentos";
import LancamentosDetalhes from "./pages/filmes/LancamentosDetalhes";
import CartazesDetalhes from "./pages/filmes/CartazesDetalhes";
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
          <Route path="/filmes/cartazes" element={<FilmesCartazes />} />
          <Route path="/filmes/lancamentos" element={<FilmesLancamentos/>} />
          <Route path="/filmes/:id" element={<FilmesDetalhes />} />
          <Route path="/lancamentos/:id" element={<LancamentosDetalhes />} />
          <Route path="/cartazes/:id" element={<CartazesDetalhes />} />
        </Routes>
       </Container>
      </BrowserRouter>

    </div>
  );
}

export default App;
