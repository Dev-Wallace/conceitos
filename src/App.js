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
import AtoresDetalhes from "./pages/filmes/AtoresDetalhes";
import SeriesPopulares from "./pages/series/SeriesPopulares";
import SeriesDetalhes from "./pages/series/SeriesDetalhes";
import SeriesNoAr from "./pages/series/SeriesNoAr";
import SeriesEstreia from "./pages/series/SeriesEstreia";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
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
          <Route path="/series/populares" element={<SeriesPopulares/>} />
          <Route path="/series/noar" element={<SeriesNoAr/>} />
          <Route path="/series/estreia" element={<SeriesEstreia/>} />
          <Route path="/filmes/:id" element={<FilmesDetalhes />} />
          <Route path="/atores/:id" element={<AtoresDetalhes />} />
          <Route path="/series/:id" element={<SeriesDetalhes />} />
        </Routes>
       </Container>
      </BrowserRouter>

    </div>
  );
}

export default App;
