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
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  span {
    color: var(--text__01);
    font-size: 14px;
    font-weight: 700;
  }
  p {
    color: var(--text__06);
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
  }
`;

export default PantallaOpcionConfig;
