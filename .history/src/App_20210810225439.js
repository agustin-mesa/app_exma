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
  background: radial-gradient(circle, #505bda, #b063c5);
`;

export default App;
