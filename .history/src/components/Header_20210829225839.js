import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useHistory } from "react-router";
import Moment from "react-moment";
import "moment/locale/es";
import { auth } from "../firebase/firebase";
import MsgAlert from "./MsgAlert";

const Header = () => {
  const history = useHistory();

  const [showMsg, changeShowMsg] = useState(false);
  // Alertas
  const [alertState, changeAlertState] = useState(false);
  const [alert, changeAlert] = useState({});

  const handleShowMsg = () => {
    return changeShowMsg(!showMsg);
  };

  const signOut = async () => {
    try {
      await auth.signOut();
      history.push("/login");
    } catch (error) {
      changeAlertState(true);
      let msg;

      switch (error.code) {
        default:
          msg = "Hubo un error al intentar cerrar sesión, inténtalo más tarde.";
          break;
      }

      changeAlert({
        classAlert: "error",
        msg: msg,
      });
    }
  };

  return (
    <ContainerHeader>
      <a href="#">LOGO</a>
      <span>
        <Moment locale="es" format="DD "></Moment>
        de
        <Moment locale="es" format=" MMMM, YYYY"></Moment>
      </span>
      <a onClick={handleShowMsg}>
        <i className="far fa-user"></i>
      </a>
      {showMsg && (
        <ContainerSignOut>
          <div className="sign-out__bg" onClick={() => handleShowMsg()}></div>
          <SignOut>
            <div>
              <p>¿Deseas cerrar sesión?</p>
              <div className="sign-out__buttons">
                <button onClick={signOut}>Sí</button>
                <button onClick={handleShowMsg}>No</button>
              </div>
            </div>
          </SignOut>
        </ContainerSignOut>
      )}
      <MsgAlert
        classAlert={alert.classAlert}
        msg={alert.msg}
        alertState={alertState}
        changeAlertState={changeAlertState}
      />
    </ContainerHeader>
  );
};

const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 20px 20px 10px 20px;
  margin-bottom: 20px;
  color: #444;
  font-size: 14px;
  font-weight: 600;

  i {
    color: #444;
    font-size: 1.8em;
  }
`;

const slideDown = keyframes`
    0%{
      transform: translateY(-1.25rem);
      opacity:0;
    }
    100%{
      transform: translateY(0);
      opacity:1;
    }
`;

const opac = keyframes`
    0%{
      background: rgba(0, 0, 0, 0);
    }
    100%{
      background: rgba(0, 0, 0, 0.7);
    }
`;

const ContainerSignOut = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .sign-out__bg {
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: 998;
    animation: ${opac} 0.3s ease forwards;
  }
`;

const SignOut = styled.div`
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
    box-shadow: 0px 8px 16px #505bda99;

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
`;

export default Header;
