import React from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Gestion from "./components/Gestion";
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
          <Header />
          {/* Routes y Switch en el componente Gestion */}
          <Switch>
            <Route path="/" exact={true} component={Gestion}></Route>
            <Route path="/register" component={Register}></Route>
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
