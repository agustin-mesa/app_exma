import React from "react";
import styled from "styled-components";

import Header from "../components/Header";

const EditarGasto = () => {
  return (
    <>
      <Header />
      <ContainerEditarGasto></ContainerEditarGasto>
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
  padding: ;
`;

export default EditarGasto;
