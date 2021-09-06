import React from "react";
import { Helmet } from "react-helmet";
import styled, { keyframes } from "styled-components";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

import {
  LogoIcon,
  Boton,
  HeaderAuth,
} from "../components/elements/StyledElements";
import IconCategorias from "../components/IconCategorias";

const Home = () => {
  return (
    <>
      <Helmet>
        {/* <link rel="shortcut icon" href="" type="image/x-icon" /> */}
        <title>Expenses Manage</title>
      </Helmet>
      <ContainerHome>
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
      </ContainerHome>
    </>
  );
};

const flotar = keyframes`
0%{     
    transform: translateY(0) rotate(-30deg);
}
50%{
    transform: translateY(-10px) rotate(-30deg);
    
}
100%{
    transform: translateY(0) rotate(-30deg);
}
`;
const flotar2 = keyframes`
0%{     
    transform: translateY(0) rotate(30deg);
}
50%{
    transform: translateY(-10px) rotate(30deg);
    
}
100%{
    transform: translateY(0) rotate(30deg);
}
`;

const ContainerHome = styled.div`
  padding: 20px 20px;
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
