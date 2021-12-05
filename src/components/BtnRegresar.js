import React from "react";
import { useHistory } from "react-router-dom";
//---------------- STYLES ----------------
import styled from "styled-components";
import { BotonRegresar, H3 } from "../components/elements/StyledElements";

const BtnRegresar = ({ ruta = "/gestion/", className, titulo }) => {
  const history = useHistory();
  return (
    <ContainerBotonR className={className}>
      <BotonRegresar onClick={() => history.push(ruta)}>
        <i className="fas fa-arrow-left"></i>
      </BotonRegresar>
      <H3>{titulo}</H3>
    </ContainerBotonR>
  );
};

const ContainerBotonR = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  &.margin {
    margin: 50px 0 0;
  }
`;
export default BtnRegresar;
