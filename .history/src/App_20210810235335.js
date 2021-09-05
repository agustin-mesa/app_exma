import React from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <div className="content">
          <ContainerGestion>
            <div className="bg-relative">
              <div className="gestion__background">
                <div className="gestion__monto">
                  <span>$0,00</span>
                  <p>TOTAL GASTADO EN EL MES</p>
                </div>
              </div>
              <Navigation />
              {/* Navegación entre las rutas Añadir Gasto, Categorías, Mi Lista */}
            </div>
          </ContainerGestion>
        </div>
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

const ContainerGestion = styled.div`
  position: absolute;
  top: 130px;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 50px 20px 30px 20px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background: #ffffff;

  .bg-relative {
    position: relative;
    padding: 20px 0;
  }

  .gestion__background {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    font-weight: 700;
    color: #ffffff;
    padding: 25px 0;
    border-radius: 30px;
    background: #1a2849;
    position: absolute;
    top: -100px;
    left: 45px;
    right: 45px;
    box-shadow: 0px 15px 20px rgba(176, 99, 197, 0.5);

    span {
      font-size: 2em;
    }
    p {
      font-size: 0.8em;
    }
  }
`;

export default App;
