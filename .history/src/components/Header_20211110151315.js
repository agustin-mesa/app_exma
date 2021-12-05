import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";
import Moment from "react-moment";
import "moment/locale/es";
//---------------- COMPONENTS ----------------
import MsgAlert from "./MsgAlert";
import MenuOptions from "./MenuOptions";
//---------------- FIREBASE ----------------
import { auth } from "../firebase/firebase";
//---------------- IMAGES ----------------
import logo from "../images/logo.png";
import { LogoIcon, slideDown } from "./elements/StyledElements";

const Header = () => {
  // useHistory para luego hacer push y redireccionar
  const history = useHistory();
  // Mostrar mensaje de Cerrar sesión
  const [showMsg, changeShowMsg] = useState(false);

  // true/false mostrar mensaje Cerrar sesión
  const handleShowMsg = () => {
    return changeShowMsg(!showMsg);
  };

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
      {showMsg && (
        <MenuOptions />
        /*
        <ContainerSignOut>
          <div className="sign-out__bg" onClick={() => handleShowMsg()}></div>
          <div className="sign-out__window">
            <div>
              <p>¿Deseas cerrar sesión?</p>
              <div className="sign-out__buttons">
                <button >Sí</button>
                <button onClick={handleShowMsg}>No</button>
              </div>
            </div>
          </div>
        </ContainerSignOut>
        */
      )}
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
  color: #444;
  font-size: 13px;
  font-weight: 600;
  background: #fff;
`;

const Photo = styled.span`
  display: flex;
  justify-content: flex-end;
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

const ContainerSignOut = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 997;

  .sign-out__bg {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: rgba(255, 255, 255, 0.8);
    z-index: 998;
  }

  .sign-out__window {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    position: absolute;
    width: 100%;
    z-index: 999;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      border-radius: 30px;
      background: #ffffff;
      padding: 20px 35px;
      width: 85%;
      color: #444;
      animation: ${slideDown} 0.5s ease forwards;
      box-shadow: 0px 15px 20px rgb(0 0 0 / 20%);

      .sign-out__buttons {
        margin-top: 20px;
        flex-direction: row;
        width: 100%;
        padding: 0;
        animation: none;
        box-shadow: none;

        button {
          border-radius: 18px;
          border: none;
          outline: none;
          padding: 10px 0;
          width: 100%;
          margin: 0 5px;

          font-weight: 700;
        }
        button:nth-child(1) {
          background: #505bda;
          color: #fff;
        }
        button:nth-child(2) {
          background: #fff;
          border: solid 1px #505bda;
          color: #505bda;
        }
      }
    }
  }
`;

export default Header;
