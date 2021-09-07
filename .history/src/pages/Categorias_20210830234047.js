import React from "react";
import { Helmet } from "react-helmet";
import useGetGastosMesCategoria from "../hooks/useGetGastoMesCategoria";
import { List, ListElement } from "../components/elements/StyledElements";
import formatearValor from "../functions/formatearValor";

const Categorias = () => {
  const gastos = useGetGastosMesCategoria();
  return (
    <div>
      <Helmet>
        {/* <link rel="shortcut icon" href="" type="image/x-icon" /> */}
        <title>Categorías</title>
      </Helmet>
      <List>
        {gastos.map((gasto) => {
          return (
            <ListElement key={gasto.categoria}>
              <IconCategorias nombre={gasto.categoria} />
              <p>{gasto.descripcion}</p>
              <span>{formatearValor(gasto.precio)}</span>
            </ListElement>
          );
        })}
      </List>
    </div>
  );
};

export default Categorias;
