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
          <IconCategorias nombre="Compras" />
          <IconCategorias nombre="Ropa" />
          <IconCategorias nombre="Diversión" />
        </HeaderHome>
      </ContainerHome>
    </>
  );
};

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
`;

export default Home;
