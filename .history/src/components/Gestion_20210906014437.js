import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import styled, { keyframes } from "styled-components";
//---------------- COMPONENTS ----------------
import Header from "./Header";
import Navigation from "./Navigation";
//---------------- PAGES ----------------
import AddGasto from "../pages/AddGasto";
import MiLista from "../pages/MiLista";
import Categorias from "../pages/Categorias";
//---------------- CONTEXT ----------------
import { useTotalMes } from "../context/TotalContext";
//---------------- FIREBASE ----------------
import { auth } from "../firebase/firebase";
//---------------- FUNCIONES ----------------
import formatearValor from "../functions/formatearValor";

const Gestion = () => {
  // Obtengo el >total< desde el  global context
  const { total } = useTotalMes();
  // Obtengo si el usuario inició sesión o no
  const [userSignedIn, changeUserSignedIn] = useState(true);

  useEffect(() => {
    // onAuthStateChanged -> verifica si el estado del auth cambió
    // true -> Usuario entró
    // false -> No hay usuario, por lo tanto lo redirige al "/login"
    const unsuscribe = auth.onAuthStateChanged((user) => {
      if (user) return changeUserSignedIn(true);
      else return changeUserSignedIn(false);
    });
    return unsuscribe;
  }, []);

  return (
    <>
      {userSignedIn ? (
        <ContainerGestion>
          <Header />
          <ContentGestion>
            <div className="bg-relative">
              <div className="gestion__background">
                <div className="gestion__monto">
                  <span>{formatearValor(total)}</span>
                  <p>TOTAL GASTADO EN EL MES</p>
                </div>
              </div>
              {/* Navegación entre las rutas Añadir Gasto, Categorías, Mi Lista */}
              <Navigation />
              <Switch></Switch>
            </div>
          </ContentGestion>
        </ContainerGestion>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

const ContainerGestion = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const moving = keyframes`
0%{
  transform: scale(1);
  box-shadow: 0px 3px 10px #505bda99;

}
50%{
  transform: scale(1.02);
  box-shadow: 0px 8px 16px #505bda99;

}
100%{
  box-shadow: 0px 3px 10px #505bda99;

  transform: scale(1);
}
`;

const ContentGestion = styled.div`
  margin: 70px 0;
  padding: 50px 20px 0 20px;

  .bg-relative {
    position: relative;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .gestion__background {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    font-weight: 700;
    color: #ffffff;
    padding: 25px 15px;
    border-radius: 30px;
    background: #505bda;
    position: absolute;
    width: 90%;
    top: -100px;
    box-shadow: 0px 8px 16px #505bda99;
    animation: ${moving} 8s ease infinite;
    transition-timing-function: ease-out;

    span {
      font-size: 1.9em;
    }
    p {
      font-size: 0.8em;
    }
  }
`;

export default Gestion;
