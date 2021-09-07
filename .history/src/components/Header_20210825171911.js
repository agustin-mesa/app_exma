import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Moment from "react-moment";
import "moment/locale/es";

const Header = () => {
  const [showMsg, changeShowMsg] = useState(true);
  const handleSignOut = () => {};

  return (
    <ContainerHeader>
      <a href="#">LOGO</a>
      <span>
        <Moment locale="es" format="DD "></Moment>
        de
        <Moment locale="es" format=" MMMM, YYYY"></Moment>
      </span>
      <a onClick={() => handleSignOut()}>
        <i className="far fa-user"></i>
      </a>
      {showMsg && (
        <SignOut>
          <div>
            <p>¿Deseas cerrar sesión?</p>
            <div className="sign-out__buttons">
              <button>Sí</button>
              <button>No</button>
            </div>
          </div>
        </SignOut>
      )}
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
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;

  i {
    color: #ffffff;
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

const SignOut = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
  animation: ${opac} 0.3s ease forwards;

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

    .sign-out__buttons {
      margin-top: 20px;
      flex-direction: row;
      width: 100%;
      padding: 0;
      animation: none;
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
