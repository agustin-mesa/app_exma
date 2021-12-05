import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Moment from "react-moment";
import "moment/locale/es";
//---------------- COMPONENTS ----------------
import MenuOptions from "./MenuOptions";
//---------------- IMAGES ----------------
import logo from "../images/logo.png";
import { LogoIcon } from "./elements/StyledElements";

const Header = () => {
  return (
    <ContainerHeader>
      <NavLink to="/gestion">
        <LogoIcon src={logo} alt="LOGO EXMA"></LogoIcon>
      </NavLink>
      <p>
        <Moment locale="es" format="DD "></Moment>
        de
        <Moment locale="es" format=" MMMM, YYYY"></Moment>
      </p>
      <MenuOptions />
    </ContainerHeader>
  );
};

const ContainerHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px 20px;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 10px;
  color: var(--text__02);
  font-size: 13px;
  font-weight: 600;
  background: var(--bg__01);
`;

export default Header;
