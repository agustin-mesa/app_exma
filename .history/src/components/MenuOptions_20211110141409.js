import React from "react";
import styled from "styled-components";

import OptionMenu from "./OptionMenu";

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
  z-index: 999;
  border-radius: 30px;
  top: 0;
  right: 0;
  background: #ffffff;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.2);
`;

export default MenuOptions;
