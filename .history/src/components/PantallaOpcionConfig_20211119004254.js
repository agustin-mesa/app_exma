import React from "react";
import styled from "styled-components";

const PantallaOpcionConfig = ({ titulo, descripcion }) => {
  return (
    <ContentOpcion>
      <span>{titulo}</span>
      <p>{descripcion}</p>
    </ContentOpcion>
  );
};

const ContentOpcion = styled.div`
  background: red;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export default PantallaOpcionConfig;
