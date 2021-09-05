import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import EditarGasto from "./pages/EditarGasto";
import { AuthProvider } from "./context/AuthContext";
import { TotalGastadoProvider } from "./context/TotalContext";
import logoIcon from "./images/icon-logo.png";

import Gestion from "./components/Gestion";
import RutaProtegida from "./components/RutaPrivada";
import IsNotMobile from "./components/IsNotMobile";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href={logoIcon} type="image/x-icon" />
        <title>EXMA</title>
      </Helmet>

      {isMobile ? (
        <AuthProvider>
          <BrowserRouter>
            <Switch>
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />

              <TotalGastadoProvider>
                <RutaProtegida path="/gestion">
                  <Gestion />
                </RutaProtegida>
                <RutaProtegida path="/editar/:id">
                  <EditarGasto />
                </RutaProtegida>
                <Route path="/" exact component={Home} />
              </TotalGastadoProvider>
            </Switch>
          </BrowserRouter>
        </AuthProvider>
      ) : (
        <IsNotMobile />
      )}
    </>
  );
}

export default App;
