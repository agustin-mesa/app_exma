import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
//---------------- HOOKS ----------------
import useGetGastosMesCategoria from "../hooks/useGetGastoMesCategoria";
//---------------- FUNCIONES ----------------
import formatearValor from "../functions/formatearValor";
//---------------- STYLES ----------------
import { List, ListElement } from "../components/elements/StyledElements";
//---------------- COMPONENTS ----------------
import IconCategorias from "../components/IconCategorias";
import ListElementLoad from "../components/ListElementLoad";
import Footer from "../components/Footer";

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
      <Footer />
    </>
  );
};

export default Categorias;
