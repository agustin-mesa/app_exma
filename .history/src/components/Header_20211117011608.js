import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Moment from "react-moment";
import "moment/locale/es";
//---------------- COMPONENTS ----------------
import MenuOptions from "./MenuOptions";
//---------------- FIREBASE ----------------
import { auth } from "../firebase/firebase";
//---------------- IMAGES ----------------
import logo from "../images/logo.png";
import { LogoIcon } from "./elements/StyledElements";

const Header = () => {
  // Mostrar overlay
  const [showMenu, changeShowMenu] = useState(false);
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
      <Photo onClick={() => changeShowMenu(!showMenu)}>
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
      <MenuOptions showMenu={showMenu} />
    </ContainerHeader>
  );
};
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

export default Header;
