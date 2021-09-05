import React from "react";
import { Helmet } from "react-helmet";
import useGetGastosMesCategoria from "../hooks/useGetGastoMesCategoria";
import { List, ListElement } from "../components/elements/StyledElements";
import formatearValor from "../functions/formatearValor";
import logoIcon from "../images/logo-icon.png";

import IconCategorias from "../components/IconCategorias";

const Categorias = () => {
  const gastos = useGetGastosMesCategoria();
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" src={logoIcon} type="image/x-icon" />
        <title>Categorías</title>
      </Helmet>
      <List>
        {gastos.map((gasto, i) => {
          return (
            <ListElement key={i} className="noHover">
              <IconCategorias nombre={gasto.categoria} />
              <p>{gasto.categoria}</p>
              <span>{formatearValor(gasto.total)}</span>
            </ListElement>
          );
        })}
      </List>
    </>
  );
};

export default Categorias;