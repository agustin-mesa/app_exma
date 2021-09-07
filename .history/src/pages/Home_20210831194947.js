import { keyframes } from "@emotion/react";
import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

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

`;

const ContainerHome = styled.div`
  padding: 20px 20px;
`;

const HeaderHome = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: red;
  width: 100%;
  height: 50vh;
  img:nth-child(1) {
    transform: rotate(-30deg);
  }
  img:nth-child(2) {
    transform: rotate(20deg);
    width: 80px;
    height: 80px;
  }
  img:nth-child(3) {
    transform: rotate(-30deg);
    width: 50px;
    height: 50px;
  }
  img:nth-child(4) {
    transform: rotate(-20deg);
    width: 60px;
    height: 60px;
  }
  img:nth-child(5) {
    transform: rotate(30deg);
    width: 40px;
    height: 40px;
  }
`;

export default Home;
