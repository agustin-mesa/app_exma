import React from "react";

//---------------- FUNCIONES ----------------
import borrarGasto from "../firebase/borrarGasto";
import formatearValor from "../functions/formatearValor";

//---------------- REACT-ROUTER ----------------
import { Link } from "react-router-dom";

//---------------- COMPONENTS ----------------
import IconCategorias from "./IconCategorias";

//---------------- STYLES ----------------
import { ListElement } from "./elements/StyledElements";

const GastoElement = ({
  idGasto,
  categoria,
  descripcion,
  precio,
  userEmail,
  changeShowMsgDeleted,
}) => {
  /*
    Obtengo información del gasto a añadir:
    - ID del gasto -> Su ID se genera mediante UUID Package
    - userEmail -> Lo necesitamos para que luego se pueda borrar el gasto
    en la base de datos
  */
  return (
    <>
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
    </>
  );
};

export default React.memo(GastoElement);
