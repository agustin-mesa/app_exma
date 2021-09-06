import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useGetGastosMesCategoria from "../hooks/useGetGastoMesCategoria";
import formatearValor from "../functions/formatearValor";

import {
  List,
  ListElement,
  ListElementLoading,
} from "../components/elements/StyledElements";
import IconCategorias from "../components/IconCategorias";

const Categorias = () => {
  const gastos = useGetGastosMesCategoria();
  const [loading, changeLoading] = useState(false);

  useEffect(() => {
    changeLoading(true);
    //setTimeout(() => {
    // changeLoading(false);
    //}, 1000);
  }, [changeLoading]);

  return (
    <>
      <Helmet>
        <title>Categorías</title>
      </Helmet>
      <List>
        {loading ? (
          <>
            {gastos.map((gasto, i) => {
              return (
                <ListElementLoading key={i}>
                  <div></div>
                  <div></div>
                  <div></div>
                </ListElementLoading>
              );
            })}
          </>
        ) : (
          <>
            {gastos.map((gasto, i) => {
              return (
                <ListElement key={i} className="noHover">
                  <IconCategorias nombre={gasto.categoria} />
                  <p>{gasto.categoria}</p>
                  <span>{formatearValor(gasto.total)}</span>
                </ListElement>
              );
            })}
          </>
        )}
      </List>
    </>
  );
};

export default Categorias;
