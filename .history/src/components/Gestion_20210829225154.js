import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import AddGasto from "../pages/AddGasto";
import MiLista from "../pages/MiLista";
import Header from "./Header";
import Categorias from "../pages/Categorias";
import { Route, Switch } from "react-router-dom";

// Conversión de moneda
import formatearValor from "../functions/formatearValor";

const Gestion = () => {
  return (
    <ContainerGestion>
      <Header />
      <ContentGestion>
        <div className="bg-relative">
          <div className="gestion__background">
            <div className="gestion__monto">
              <span>{formatearValor(0.0)}</span>
              <p>TOTAL GASTADO EN EL MES</p>
            </div>
          </div>
          {/* Navegación entre las rutas Añadir Gasto, Categorías, Mi Lista */}
          <Navigation />
          <Switch>
            <Route path="/gestion" exact component={AddGasto} />
            <Route path="/gestion/categorias" component={Categorias} />
            <Route path="/gestion/mi-lista" component={MiLista} />
          </Switch>
        </div>
      </ContentGestion>
    </ContainerGestion>
  );
};

const ContainerGestion = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
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
    box-shadow: 0px 8px 16px #;

    span {
      font-size: 1.9em;
    }
    p {
      font-size: 0.8em;
    }
  }
`;

export default Gestion;
