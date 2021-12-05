import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";
//---------------- IMAGES ----------------
import logo from "../images/logo.png";
import backgroundHome from "../images/background_home.svg";
//---------------- STYLES ----------------
import {
  LogoIcon,
  Boton,
  HeaderAuth,
  ContainerInicio,
} from "../components/elements/StyledElements";
//---------------- FIREBASE ----------------
import { auth } from "../firebase/firebase";
//---------------- COMPONENTS ----------------
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>EXMA</title>
      </Helmet>
      {auth.currentUser === null ? (
        <ContainerHome className="withBackground" img={backgroundHome}>
          <HeaderAuth>
            <LogoIcon className="grande" src={logo} alt="LOGO EXMA"></LogoIcon>
          </HeaderAuth>
          <PresentationHome>
            <p className="center">
              <b>EXMA</b> es una aplicación web de <b>registro de gastos</b> en
              la que podes tener la <b>administración de tus gastos</b>{" "}
              ordenándola de forma sencilla.
            </p>
            <NavLink to="/login">
              <Boton className="action">Iniciar sesión</Boton>
            </NavLink>
            <NavLink to="/register">
              <Boton>Registrarme</Boton>
            </NavLink>
          </PresentationHome>
          <Footer />
        </ContainerHome>
      ) : (
        <Redirect to="/gestion" />
      )}
    </>
  );
};

const ContainerHome = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: ${showElement} 1s ease forwards;

  p {
    color: #444444;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    text-align: left;
    padding: 0 20px;
    width: 100%;
    animation: opac 0.5s ease forwards;
  }
  p.center {
    margin: 0 0 5px;
    text-align: center;
  }
  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    @keyframes opac {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    .auth__face-google {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: center;
      button {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        font-size: 30px;
        margin: 5px 10px;
        width: 65px;
        height: 65px;
        border-radius: 50px;
        color: #fff;
        transition: all 0.2s ease;
        border: none;
      }
      button:first-child {
        background: #5072da;
        box-shadow: 0px 8px 20px rgba(80, 114, 218, 0.5);
      }
      button:first-child:hover {
        background: #4867c6;
      }
      button:last-child {
        background: #da5050;
        box-shadow: 0px 8px 20px rgba(218, 80, 80, 0.5);
      }
      button:last-child:hover {
        background: #c44747;
      }
    }

    .separado {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: center;
      width: 100%;
      color: rgba(68, 68, 68, 0.2);
      font-size: 14px;
      font-weight: 600;
      margin: 20px 0;
      hr {
        width: 100%;
        margin: 0 10px;
        border: 0.5px solid rgba(68, 68, 68, 0.2);
      }
    }
  }

  .actions {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    span {
      color: #444444;
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      line-height: 22px;
      margin: 20px 0 5px 0;
    }
    .actions__sesion {
      color: #505bda;
      font-size: 14px;
      font-weight: 700;
      text-decoration: none;
    }
  }
`;

const PresentationHome = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    color: #444444;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    text-align: center;
    margin: 10px 0 20px;
  }
`;

export default Home;
