import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/paginas/Home";
import AlunoList from "./components/paginas/pet/AlunoList";
import Container from "react-bootstrap/Container";
import AlunoIncluir from "./components/paginas/pet/AlunoIncluir";
import AlunoAlterar from "./components/paginas/pet/AlunoAlterar";

function App() {
  

  
  return (
    <div className="App">
      
      <BrowserRouter>
        <Container>
          <Header/>

          <Routes>
            <Route exact path="" element={<Home/>}  />

            <Route path="/aluno" >
              <Route exact path="" element={<AlunoList/>}  />
              <Route exact path="list" element={<AlunoList/>}  />
              <Route exact path="incluir" element={<AlunoIncluir/>}  />
              <Route exact path="alterar/:id" element={<AlunoAlterar/>}  />
            </Route>

          </Routes>

        </Container>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
