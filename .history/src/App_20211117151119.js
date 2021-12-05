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
import AddGasto from "./pages/AddGasto";
import Gestion from "./pages/Gestion";
import MiLista from "./pages/MiLista";
import Categorias from "./pages/Categorias";
import EnviarComentario from "./pages/EnviarComentario";
import VerPerfil from "./pages/VerPerfil";
//---------------- CONTEXT ----------------
import { AuthProvider } from "./context/AuthContext";
import { TotalGastadoProvider } from "./context/TotalContext";
//---------------- COMPONENTS ----------------
import Header from "./components/Header";
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
              <Route path="/" exact component={Home} />
              <Route path="/reset-password" exact component={ResetPassword} />
              <Route path="/register" exact component={Register} />
              <Route path="/login" exact component={Login} />
              <TotalGastadoProvider>
                <Header />
                <RutaProtegida path="/gestion">
                  <Gestion />
                  <Route path="/gestion" exact component={AddGasto} />
                  <Route path="/gestion/categorias" component={Categorias} />
                  <Route path="/gestion/mi-lista" component={MiLista} />
                </RutaProtegida>
                <RutaProtegida path="/enviar-comentario">
                  <Route
                    path="/enviar-comentario"
                    component={EnviarComentario}
                  />
                </RutaProtegida>
                <RutaProtegida path="/mi-perfil">
                  <Route path="/mi-perfil" component={VerPerfil} />
                </RutaProtegida>
                <RutaProtegida path="/editar/:id">
                  <EditarGasto />
                </RutaProtegida>
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