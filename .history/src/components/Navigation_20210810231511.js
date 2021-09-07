import React from "react";
import styled from "styled-components";

const Navigation = () => {
  return (
    <ContainerNavigation>
      <a href="#">AÑADIR GASTO</a>
      <a href="#">CATEGORÍAS</a>
      <a href="#">MI LISTA</a>
    </ContainerNavigation>
  );
};

const ContainerNavigation = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  a {
    color: #444444;
    font-size: 1em;
    font-weight: 700;
  }
`;

export default Navigation;
