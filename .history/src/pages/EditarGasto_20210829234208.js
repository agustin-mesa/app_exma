import React from "react";
import styled from "styled-components";
import {BotonRegresar} "../components/elements/StyledElements"

import Header from "../components/Header";

const EditarGasto = () => {
  return (
    <>
      <Header />
      <ContainerEditarGasto>
        <ContainerBotonR><BotonRegresar></BotonRegresar></ContainerBotonR>
      </ContainerEditarGasto>
    </>
  );
};

const ContainerEditarGasto = styled.div`
  padding: 50px 20px 0 20px;
`;

const ContainerBotonR = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export default EditarGasto;
