import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ContainerNavigation>
      <NavLink to="/gestion/añadir-gasto">AÑADIR GASTO</NavLink>
      <NavLink to="/gestion/categorias">CATEGORÍAS</NavLink>
      <NavLink to="/gestion/mi-lista">MI LISTA</NavLink>
    </ContainerNavigation>
  );
};

const ContainerNavigation = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 20px;
  overflow-x: scroll;
  white-space: nowrap;

  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }

  a {
    padding: 5px 0;
    color: #444444;
    font-size: 0.9em;
    font-weight: 700;
    margin: 0 8px;
    text-decoration: none;
    border-bottom: 2px solid #fff;
  }
  .active {
    border-bottom: 2px solid #505bda;
  }
`;

export default Navigation;
