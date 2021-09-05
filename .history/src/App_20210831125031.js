import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import EditarGasto from "./pages/EditarGasto";
import { AuthProvider } from "./context/AuthContext";
import { TotalGastadoProvider } from "./context/TotalContext";

import Gestion from "./components/Gestion";
import RutaProtegida from "./components/RutaPrivada";

function App() {
  return (
    <>
      <Helmet>
        {/* <link rel="shortcut icon" href="" type="image/x-icon" /> */}
        <title>Expenses Manage</title>
      </Helmet>

      <AuthProvider>
        <TotalGastadoProvider>
          <BrowserRouter>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <RutaProtegida path="/gestion">
                <Gestion />
              </RutaProtegida>
              <RutaProtegida path="/editar/:id">
                <EditarGasto />
              </RutaProtegida>
            </Switch>
          </BrowserRouter>
        </TotalGastadoProvider>
      </AuthProvider>
    </>
  );
}

export default App;
