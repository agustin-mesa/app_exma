import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
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
  const [loading, changeLoading] = useState(true);

  useEffect(() => {
    changeLoading(true);
    //setTimeout(() => {
    //changeLoading(false);
    //}, 1000);
  }, [changeLoading]);

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

const LoadingIcono = styled.div`
  width: 40px;
  height: 40px;
`;

export default React.memo(GastoElement);
