import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";
//---------------- IMAGES ----------------
import logo from "../images/logo.png";
import backgroundHome from "../images/background_home.svg";
import backgroundHomeDark from "../images/background_home_dark.svg";
//---------------- STYLES ----------------
import {
  LogoIcon,
  Boton,
  HeaderAuth,
  showElement,
} from "../components/elements/StyledElements";
//---------------- FIREBASE ----------------
import { auth } from "../firebase/firebase";
//---------------- COMPONENTS ----------------
import Footer from "../components/Footer";
//---------------- COMPONENTS ----------------
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { theme } = useTheme();

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  return (
    <>
      <Helmet>
        <title>EXMA</title>
      </Helmet>
      {auth.currentUser === null ? (
        <ContainerHome
          className="withBackground"
          img={theme === "light" ? backgroundHome : backgroundHomeDark}
        >
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
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-image: url(${(props) => props.img});
  background-size: cover;

  p {
    color: var(--text__01);
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
`;

const PresentationHome = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    color: var(--text__01);
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    text-align: center;
    margin: 10px 0 20px;
  }
`;

export default Home;
