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
  margin-bottom: 20px;
  overflow-x: scroll;
  white-space: nowrap;
  justify-content: flex-start;
  background: red;

  a {
    padding: 5px 0;
    color: #444444;
    font-size: 0.9em;
    font-weight: 700;
    margin: 0 5px;
    text-decoration: none;
    border-bottom: 2px solid #fff;
  }
  .active {
    border-bottom: 2px solid #505bda;
  }
`;

export default Navigation;
