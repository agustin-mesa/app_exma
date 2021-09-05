import React from "react";
import styled from "styled-components";
import "./App.css";
import AddGasto from "./components/AddGasto";

function App() {
  return (
    <Contenedor>
      <AddGasto />
    </Contenedor>
  );
}

const Contenedor = styled.div`
  background: linear-gradient(-66deg, #505bda, #b063c5);
  width: 100%;
  height: 100vh;
`;

export default App;
