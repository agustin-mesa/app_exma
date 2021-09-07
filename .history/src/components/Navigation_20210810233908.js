import React from "react";
import styled from "styled-components";

const Navigation = () => {
  return (
    <ContainerNavigation>
      <a href="#">AÑADIR GASTO</a>
      <a href="#">CATEGORÍAS</a>
      <a href="#">MI LISTA</a>
      {/* <NavLink to="/add-gasto">AÑADIR GASTO</NavLink>
      <NavLink to="/categorias">CATEGORÍAS</NavLink>
      <NavLink to="/mi-lista">MI LISTA</NavLink> */}
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
    font-size: 0.9em;
    font-weight: 700;
    margin: 0 10px;
    text-decoration: none;
  }
  .active {
    border-bottom: 2px solid #505bda;
  }
`;

export default Navigation;
