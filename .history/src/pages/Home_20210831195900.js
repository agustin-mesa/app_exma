import React from "react";
import { Helmet } from "react-helmet";
import styled, { keyframes } from "styled-components";

import IconCategorias from "../components/IconCategorias";

const Home = () => {
  return (
    <>
      <Helmet>
        {/* <link rel="shortcut icon" href="" type="image/x-icon" /> */}
        <title>Expenses Manage</title>
      </Helmet>
      <ContainerHome>
        <HeaderHome>
          <IconCategorias nombre="Compras" />
          <IconCategorias nombre="Transporte" />
          <IconCategorias nombre="Cuentas y Pagos" />
          <IconCategorias nombre="Ropa" />
          <IconCategorias nombre="Diversión" />
        </HeaderHome>
      </ContainerHome>
    </>
  );
};

const flotar = keyframes`
0%{     
    transform: translateY(0);
}
50%{
    transform: translateY(-10px);
    transform: rotate(-30deg);
}
100%{
    transform: translateY(0);
}
`;

const ContainerHome = styled.div`
  padding: 20px 20px;
`;

const HeaderHome = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40vh;
  img:nth-child(1) {
    position: absolute;
    top: 30px;
    transform: rotate(-30deg);
    animation: ${flotar} 5s ease infinite;
  }
  img:nth-child(2) {
    position: absolute;
    bottom: 40px;
    right: 20px;
    transform: rotate(20deg);
    width: 80px;
    height: 80px;
    animation: ${flotar} 5s 0.2s ease infinite;
  }
  img:nth-child(3) {
    position: absolute;
    top: 60px;
    right: 30px;
    transform: rotate(-30deg);
    width: 50px;
    height: 50px;
    animation: ${flotar} 5s 0.4s ease infinite;
  }
  img:nth-child(4) {
    position: absolute;
    top: 80px;
    left: 40px;
    transform: rotate(-20deg);
    width: 60px;
    height: 60px;
    animation: ${flotar} 5s 0.5s ease infinite;
  }
  img:nth-child(5) {
    position: absolute;
    bottom: 30px;
    left: 50px;
    transform: rotate(-30deg);
    width: 65px;
    height: 65px;
    animation: ${flotar} 5s 0.1s ease infinite;
  }
`;

export default Home;
