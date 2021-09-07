import React from "react";
import styled from "styled-components";
import Moment from "react-moment";
import "moment/locale/es";

const Header = () => {
  return (
    <ContainerHeader>
      <a href="#">LOGO</a>
      <span>
        <Moment locale="es" format="DD "></Moment>
        de
        <Moment locale="es" format=" MMMM, YYYY"></Moment>
      </span>
      <a href="#">
        <i className="far fa-user"></i>
      </a>
      <SignOut>
        <div>
          <p>¿Deseas cerrar sesión?</p>
          <div className="sign-out__buttons">
            <button>Sí</button>
            <button>No</button>
          </div>
        </div>
      </SignOut>
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

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 30px;
    background: #ffffff;
    padding: 20px 25px 10px;
    color: #444;

    .sign-out__buttons {
      margin-top: 10px;
      flex-direction: row;

      button {
        border-radius: 18px;

        border: none;
        outline: none;
        padding: 10px 20px;
        width: 100%;
      }
      button:nth-child(1) {
        background: #505bda;
      }
      button:nth-child(2) {
        background: #fff;
      }
    }
  }
`;

export default Header;
