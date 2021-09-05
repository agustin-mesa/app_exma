import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ContainerNavigation>
      <NavLink to="/add-gasto">AÑADIR GASTO</NavLink>
      <NavLink to="/categorias">CATEGORÍAS</NavLink>
      <NavLink to="/mi-lista">MI LISTA</NavLink>
    </ContainerNavigation>
  );
};

const ContainerNavigation = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  a {
    position: relative;
    padding: 5px 0;
    color: #444444;
    font-size: 0.9em;
    font-weight: 700;
    margin: 0 8px;
    text-decoration: none;
  }
  .active {
    border-bottom: 2px solid #505bda;
  }
`;

export default Navigation;
