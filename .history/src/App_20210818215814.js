import React from "react";
import styled from "styled-components";
import "./App.css";
import AddGasto from "./pages/AddGasto";
import MiLista from "./pages/MiLista";
import Categorias from "./pages/Categorias";
import Register from "./pages/Register";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        {/* <link rel="shortcut icon" href="" type="image/x-icon" /> */}
        <title>Expenses Manage</title>
      </Helmet>
      <BrowserRouter>
        <Container>
          <Switch>
            <Route path="/" component={AddGasto} />
            <Route path="/categorias" component={Categorias} />
            <Route path="/mi-lista" component={MiLista} />
            <Route path="/register" component={Register} />
          </Switch>
        </Container>
      </BrowserRouter>
    </>
  );
}

const Container = styled.div`
  position: relative;
  background: linear-gradient(-65deg, #505bda, #b063c5);
  width: 100%;
  height: 100vh;
`;

export default App;
