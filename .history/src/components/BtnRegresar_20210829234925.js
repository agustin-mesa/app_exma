import React from "react";
import styled from "styled-components";

import { BotonRegresar } from "../components/elements/StyledElements";

const BtnRegresar = () => {
  return (
    <ContainerBotonR>
      <BotonRegresar>
        <i className="fas fa-arrow-left"></i>
      </BotonRegresar>
    </ContainerBotonR>
  );
};

const ContainerBotonR = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export default BtnRegresar;
