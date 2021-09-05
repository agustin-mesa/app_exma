import { keyframes } from "@emotion/react";
import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import IconCategorias from "../components/IconCategorias";

const Home = () => {
  const categorias = [
    {
      width: "100px",
      height: "100px",
      rotate: "20deg",
      animation: flotar,
      nombre: "Cuentas y Pagos",
    },
    {
      width: "150px",
      height: "150px",
      rotate: "20deg",
      animation: flotar,
      nombre: "Transporte",
    },
    {
      width: "200px",
      height: "200px",
      rotate: "20deg",
      animation: flotar,
      nombre: "Ropa",
    },
    {
      width: "70px",
      height: "70px",
      rotate: "20deg",
      animation: flotar,
      nombre: "Compras",
    },
    {
      width: "50px",
      height: "50px",
      rotate: "20deg",
      animation: flotar,
      nombre: "Diversión",
    },
  ];

  return (
    <>
      <Helmet>
        {/* <link rel="shortcut icon" href="" type="image/x-icon" /> */}
        <title>Expenses Manage</title>
      </Helmet>
      <ContainerHome>
        <HeaderHome>
          <IconCategorias nombre={categorias[0].nombre} />
          <IconCategorias nombre={categorias[1].nombre} />
          <IconCategorias nombre={categorias[2].nombre} />
          <IconCategorias nombre={categorias[3].nombre} />
          <IconCategorias nombre={categorias[4].nombre} />
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
  img {
    width: ${(props) => {
      props.categorias.map((categoria) => {
        if (categoria.nombre === "Compras") return categoria.width;
        if (categoria.nombre === "Ropa") return categoria.width;
        if (categoria.nombre === "Cuentas y Pagos") return categoria.width;
        if (categoria.nombre === "Diversión") return categoria.width;
        if (categoria.nombre === "Transporte") return categoria.width;
      });
    }};
  }
`;

export default Home;
