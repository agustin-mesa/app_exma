import React from "react";
import { Helmet } from "react-helmet";
import useGetGastosMesCategoria from "../hooks/useGetGastoMesCategoria";
import formatearValor from "../functions/formatearValor";

import { List, ListElement } from "../components/elements/StyledElements";
import IconCategorias from "../components/IconCategorias";

const Categorias = () => {
  const gastos = useGetGastosMesCategoria();
  return (
    <>
      <Helmet>
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
