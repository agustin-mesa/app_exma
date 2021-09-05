import React from "react";
import styled from "styled-components";
import "./App.css";
import AddGasto from "./components/AddGasto";
import Header from "./components/Header";

function App() {
  return (
    <Contenedor>
      <Header />
      <AddGasto />
    </Contenedor>
  );
}

const Contenedor = styled.div`
  background: linear-gradient(-65deg, #505bda, #b063c5);
  width: 100%;
  height: 100vh;
`;

export default App;
