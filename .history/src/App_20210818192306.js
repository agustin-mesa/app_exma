import React from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Gestion from "./components/Gestion";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        {/* Routes y Switch en el componente Gestion */}
        <Gestion />
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

export default App;
