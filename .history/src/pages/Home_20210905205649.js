import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";
//---------------- IMAGES ----------------
import logo from "../images/logo.png";
import backgroundHome from "../images/background_home.svg";

import {
  LogoIcon,
  Boton,
  HeaderAuth,
  ContainerInicio,
} from "../components/elements/StyledElements";

const Home = () => {
  return (
    <>
      <Helmet>
        {/* <link rel="shortcut icon" href="" type="image/x-icon" /> */}
        <title>Expenses Manage</title>
      </Helmet>
      <ContainerInicio className="withBackground" img={backgroundHome}>
        <HeaderAuth>
          <LogoIcon className="grande" src={logo} alt="LOGO EXMA"></LogoIcon>
        </HeaderAuth>
        <PresentationHome>
          <p>
            <b>EXMA</b> es una aplicación web de <b>registro de gastos</b> para
            que puedas tener la <b>administración de tu economía</b> de forma
            sencilla ordenando por categorias y fecha.
          </p>
          <NavLink to="/login">
            <Boton className="action">Iniciar sesión</Boton>
          </NavLink>
          <NavLink to="/register">
            <Boton>Registrarme</Boton>
          </NavLink>
        </PresentationHome>
      </ContainerInicio>
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
