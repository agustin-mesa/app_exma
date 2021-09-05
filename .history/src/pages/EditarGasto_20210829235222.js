import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import BtnRegresar from "../components/BtnRegresar";

const EditarGasto = () => {
  return (
    <>
      <Header />
      <ContainerEditarGasto>
        <BtnRegresar ruta="/gestion/mi-lista" />
      </ContainerEditarGasto>
    </>
  );
};

const ContainerEditarGasto = styled.div`
  padding: 0 20px;
`;

export default EditarGasto;
