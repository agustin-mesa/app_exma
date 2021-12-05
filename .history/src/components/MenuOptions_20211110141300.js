import React from "react";
import styled from "styled-components";

import OptionMenu from "./OptionMenu";

import colors as

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
      <OptionMenu icono="fas fa-cog" opcion="Configuración" />
      <OptionMenu icono="fas fa-moon" opcion="Pantalla y accesibilidad" />
      <OptionMenu icono="fas fa-sign-out-alt" opcion="Cerrar sesión" />
    </ContainerMenuOptions>
  );
};

const ContainerMenuOptions = styled.ul`
  position: absolute;
  background: #fff;
`;

export default MenuOptions;
