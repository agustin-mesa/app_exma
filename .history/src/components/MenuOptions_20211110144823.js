import React from "react";
import styled from "styled-components";

import OptionMenu from "./OptionMenu";

import { slideDown } from "./elements/StyledElements";

const MenuOptions = () => {
  return (
    <ContainerMenuOptions>
      <OptionMenu
        icono="far fa-user"
        opcion="Mauro Mesa"
        texto="Ver tu perfil"
      />
      <hr />
      <OptionMenu
        icono="far fa-comments"
        opcion="Enviar comentarios"
        texto="Ayúdanos a mejorar la nueva versión de EXMA"
      />
      <hr />
      <OptionMenu icono="fas fa-cog" opcion="Configuración" texto="" />
      <OptionMenu
        icono="fas fa-moon"
        opcion="Pantalla y accesibilidad"
        texto=""
      />
      <OptionMenu icono="fas fa-sign-out-alt" opcion="Cerrar sesión" texto="" />
    </ContainerMenuOptions>
  );
};

const ContainerMenuOptions = styled.ul`
  position: absolute;
  z-index: 999;
  border-radius: 30px;
  top: 50px;
  right: 0;
  background: #ffffff;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.2);
  padding: 10px;

  animation: ${slideDown} 0.3s ease forwards;

  hr {
    margin: 5px 0;
    border: solid 1px rgba(0, 0, 0, 0.2);
  }
`;

export default MenuOptions;
