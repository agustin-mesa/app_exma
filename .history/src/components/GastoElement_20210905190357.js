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
      {loading ? (
        <ListElementLoading>
          <div></div>
        </ListElementLoading>
      ) : (
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
      )}
    </>
  );
};

const ListElementLoading = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  padding: 5px 5px;
  border-radius: 8px;
  transition: all 0.2s ease;
  div {
    background: rgba(220, 220, 220, 0.2);
    box-shadow: 0 4px 10px 0 #44444488;
    border-radius: 4px;
    width: 40px;
    height: 40px;
  }
`;

export default React.memo(GastoElement);
