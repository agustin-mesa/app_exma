import React from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./Navigation";
import AddGasto from "../pages/AddGasto";
import MiLista from "../pages/MiLista";
import Categorias from "../pages/Categorias";
import { BrowserRouter } from "react-router-dom";

import Gestion from "./components/Gestion";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Navigation />
        {/* Navegación entre las rutas Añadir Gasto, Categorías, Mi Lista */}
        <Switch>
          <Route path="/add-gasto" component={AddGasto}></Route>
          <Route path="/categorias" component={Categorias}></Route>
          <Route path="/mi-lista" component={MiLista}></Route>
        </Switch>
        <Gestion />
      </Container>
    </BrowserRouter>
  );
}

const Container = styled.div`
  position: relative;
  background: linear-gradient(-65deg, #505bda, #b063c5);
  width: 100%;
  height: 100vh;
`;

export default App;
