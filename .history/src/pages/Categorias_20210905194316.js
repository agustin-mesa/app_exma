import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useGetGastosMesCategoria from "../hooks/useGetGastoMesCategoria";
import formatearValor from "../functions/formatearValor";

import { List, ListElement } from "../components/elements/StyledElements";
import IconCategorias from "../components/IconCategorias";
import ListElementLoad from "../components/ListElementLoad";

const Categorias = () => {
  const gastos = useGetGastosMesCategoria();
  const [loading, changeLoading] = useState(false);

  useEffect(() => {
    changeLoading(true);
    setTimeout(() => {
      changeLoading(false);
    }, 1000);
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
              return <ListElementLoad key={i} />;
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
