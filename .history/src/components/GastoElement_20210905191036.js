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
          <div></div>
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
        left: -60px;
    }
    100%   {
        left: 100%;
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
    position: relative;
    background: rgba(220, 220, 220, 0.2);
    border-radius: 12px;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }
  div::before {
    content: "";
    display: block;
    position: absolute;
    left: -60px;
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

  div::nth-child(2) {
    background: red;
  }
`;

export default React.memo(GastoElement);
