import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Moment from "react-moment";
import "moment/locale/es";
//---------------- COMPONENTS ----------------
import BtnRegresar from "./BtnRegresar";
import MenuOptions from "./MenuOptions";
//---------------- FIREBASE ----------------
import { auth } from "../firebase/firebase";
//---------------- IMAGES ----------------
import logo from "../images/logo.png";
import { LogoIcon, slideDown } from "./elements/StyledElements";

const Header = () => {
  // Mostrar mensaje de Cerrar sesión
  const [showMsg, changeShowMsg] = useState(false);

  // true/false mostrar mensaje Cerrar sesión
  const handleShowMsg = () => {
    return changeShowMsg(!showMsg);
  };

  return (
    <>
      <ContainerHeader>
        <NavLink to="/gestion">
          <LogoIcon src={logo} alt="LOGO EXMA"></LogoIcon>
        </NavLink>
        <p>
          <Moment locale="es" format="DD "></Moment>
          de
          <Moment locale="es" format=" MMMM, YYYY"></Moment>
        </p>
        <Photo onClick={handleShowMsg}>
          {auth.currentUser ? (
            auth.currentUser.photoURL ? (
              <img
                src={auth.currentUser.photoURL}
                alt={auth.currentUser.displayName}
              />
            ) : (
              <i className="far fa-user"></i>
            )
          ) : (
            ""
          )}
        </Photo>
        {showMsg && <MenuOptions />}
      </ContainerHeader>
      <ContainerBtnRegresar>
        <BtnRegresar ruta="/gestion" />
      </ContainerBtnRegresar>
    </>
  );
};

const ContainerBtnRegresar = styled.div`
  margin: 50px 0 0;
`;

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
  color: #444;
  font-size: 13px;
  font-weight: 600;
  background: #fff;
`;

const Photo = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 40px;
  height: 40px;
  img {
    border-radius: 50px;
  }
  i {
    color: #444;
    font-size: 1.8em;
  }
`;

export default Header;
