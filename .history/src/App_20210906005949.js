import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "react-responsive";
//---------------- PAGES ----------------
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import EditarGasto from "./pages/EditarGasto";
import ResetPassword from "./pages/ResetPassword";
//---------------- CONTEXT ----------------
import { AuthProvider } from "./context/AuthContext";
import { TotalGastadoProvider } from "./context/TotalContext";
//---------------- COMPONENTS ----------------
import Gestion from "./components/Gestion";
import RutaProtegida from "./components/RutaPrivada";
import IsNotMobile from "./components/IsNotMobile";
//---------------- IMAGES ----------------
import logo from "./images/icon-logo.png";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href={logo} type="image/x-icon" />
        <title>EXMA</title>
      </Helmet>

      {isMobile ? (
        <AuthProvider>
          <BrowserRouter>
            <Switch>
              <Route path="/reset-password" component={ResetPassword} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/" exact component={Home} />
              <TotalGastadoProvider>
                <RutaProtegida path="/gestion">
                  <Gestion />
                </RutaProtegida>
                <RutaProtegida path="/editar/:id">
                  <EditarGasto />
                </RutaProtegida>
              </TotalGastadoProvider>
              <Route component={Login} />
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
