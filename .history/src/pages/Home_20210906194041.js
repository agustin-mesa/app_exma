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
  console.log("Home");
  return (
    <>
      <Helmet>
        <title>EXMA</title>
      </Helmet>
      {auth.currentUser === null ? (
        <ContainerInicio className="withBackground" img={backgroundHome}>
          <HeaderAuth>
            <LogoIcon className="grande" src={logo} alt="LOGO EXMA"></LogoIcon>
          </HeaderAuth>
          <PresentationHome>
            <p className="center">
              <b>EXMA</b> es una aplicación web de <b>registro de gastos</b> en
              la que puedes tener la <b>administración de tu economía</b>{" "}
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
        </ContainerInicio>
      ) : (
        <Redirect to="/gestion" />
      )}
    </>
  );
};

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
