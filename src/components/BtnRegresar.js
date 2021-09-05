import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { BotonRegresar } from "../components/elements/StyledElements";

const BtnRegresar = ({ ruta = "/gestion/" }) => {
  const history = useHistory();
  return (
    <ContainerBotonR>
      <BotonRegresar onClick={() => history.push(ruta)}>
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
