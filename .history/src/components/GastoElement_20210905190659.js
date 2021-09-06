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

const load = keyframes`
    0% {
        left: -10px;
    }
    100%   {
        left: 0;
    }
    `;

const ListElementLoading = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  padding: 5px 5px;
  border-radius: 8px;
  transition: all 0.2s ease;
  div {
    background: rgba(220, 220, 220, 0.2);
    box-shadow: 0 4px 10px 0 rgba(33, 33, 33, 0.2);
    border-radius: 4px;
    width: 40px;
    height: 40px;
  }
  div::before {
    content: "";
    display: block;
    position: absolute;
    left: -15px;
    top: 0;
    height: 40px;
    width: 40px;
    background: linear-gradient(
      to right,
      transparent 0%,
      #e8e8e8 50%,
      transparent 100%
    );
    animation: ${load} 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`;

export default React.memo(GastoElement);
