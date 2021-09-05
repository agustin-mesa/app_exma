import React from "react";
import borrarGasto from "../firebase/borrarGasto";
import formatearValor from "../functions/formatearValor";
import { ListElement } from "./elements/StyledElements";
import { Link } from "react-router-dom";

import IconCategorias from "./IconCategorias";

const GastoElement = ({
  idGasto,
  categoria,
  descripcion,
  precio,
  userEmail,
  changeShowMsgDeleted,
}) => {
  console.log("Elemento: ", descripcion, " renderizado");
  return (
    <ListElement>
      <IconCategorias nombre={categoria} />
      <p>{descripcion}</p>
      <span>{formatearValor(precio)}</span>
      <div className="listElement__buttons">
        <Link to={`/editar/${idGasto}`}>
          <button>
            <i className="fas fa-pen"></i>
          </button>
        </Link>
        <button
          onClick={() => changeShowMsgDeleted(borrarGasto(idGasto, userEmail))}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </ListElement>
  );
};

export default GastoElement;
