import React from "react";
import borrarGasto from "../firebase/borrarGasto";
import formatearValor from "../functions/formatearValor";
import {
    ListElement,
    } from "../components/elements/StyledElements";

import IconCategorias from "../components/IconCategorias";

const ListElement = ({idGasto, categoria, descripcion, precio, userEmail, changeShowMsgDeleted}) => {
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
          onClick={() =>
            changeShowMsgDeleted(borrarGasto(idGasto, userEmail))
          }
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </ListElement>
  );
};

export default ListElement;
