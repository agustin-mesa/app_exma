import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import styled, { keyframes } from "styled-components";
import { useAuth } from "../context/AuthContext";
import useGetGastos from "../hooks/useGetGastos";
import { Link } from "react-router-dom";
import { format, fromUnixTime } from "date-fns";
import { es } from "date-fns/locale";

import { Boton, List } from "../components/elements/StyledElements";
import LoadSpinner from "../components/LoadSpinner";
import MsgAlert from "../components/MsgAlert";
import GastoElement from "../components/GastoElement";

const MiLista = () => {
  const [loading, changeLoading] = useState(false);
  const [msgNoGastos, changeMsgNoGastos] = useState(false);

  const { user } = useAuth();
  const [gastos, cargarMasGastos, gastosPorCargar] = useGetGastos();

  const [alertState, changeAlertState] = useState(false);
  const [alert, changeAlert] = useState({});
  const [showMsgDeleted, changeShowMsgDeleted] = useState(false);

  const formatDate = (fecha) => {
    return format(fromUnixTime(fecha), "dd 'de' MMMM', ' yyyy", { locale: es });
  };

  const compararFecha = (gastos, i, gasto) => {
    if (i !== 0) {
      const fechaActual = formatDate(gasto.fecha);
      const fechaAnterior = formatDate(gastos[i - 1].fecha);

      if (fechaActual === fechaAnterior) {
        return true;
      } else {
        return false;
      }
    }
  };

  useEffect(() => {
    changeLoading(true);
    //setTimeout(() => {
    //changeLoading(false);
    //}, 1000);
    setTimeout(() => {
      changeMsgNoGastos(true);
    }, 1000);
  }, [changeLoading, changeMsgNoGastos]);
  return (
    <>
      <Helmet>
        {/* <link rel="shortcut icon" href="" type="image/x-icon" /> */}
        <title>Mi lista</title>
      </Helmet>
      <List>
        {loading ? (
          <ContainerLoadSpinner>
            <LoadSpinner />
            <ListElementLoading>
              <div></div>
              <div></div>
              <div></div>
            </ListElementLoading>
          </ContainerLoadSpinner>
        ) : gastos.length === 0 ? (
          msgNoGastos && (
            <ContainerSubtitle>
              <p>No hay gastos en tu lista</p>
              <Link to="/gestion">
                <Boton>Agregar gasto</Boton>
              </Link>
            </ContainerSubtitle>
          )
        ) : (
          <>
            {gastos.map((gasto, i) => {
              return (
                <div key={i}>
                  {!compararFecha(gastos, i, gasto) && (
                    <Fecha>{formatDate(gasto.fecha)}</Fecha>
                  )}
                  <GastoElement
                    key={gasto.idGasto}
                    idGasto={gasto.idGasto}
                    categoria={gasto.categoria}
                    descripcion={gasto.descripcion}
                    precio={gasto.precio}
                    userEmail={user.email}
                    changeShowMsgDeleted={changeShowMsgDeleted}
                  />
                </div>
              );
            })}
            {gastos.length > 9
              ? gastosPorCargar && (
                  <ContainerMore>
                    <button onClick={() => cargarMasGastos()}>
                      Cargar más...
                    </button>
                  </ContainerMore>
                )
              : ""}
          </>
        )}

        {showMsgDeleted &&
          (changeAlertState(true),
          changeAlert({
            classAlert: "error",
            msg: "Gasto eliminado",
          }),
          setTimeout(changeShowMsgDeleted(false), 3000))}
        <MsgAlert
          classAlert={alert.classAlert}
          msg={alert.msg}
          alertState={alertState}
          changeAlertState={changeAlertState}
        />
      </List>
    </>
  );
};

const ContainerLoadSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

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
  justify-content: center;
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

  div:nth-child(2) {
    flex: 1;
    height: 15px;
    margin: 0 60px 0 10px;
  }
  div:nth-child(3) {
    height: 15px;
  }
`;

const Fecha = styled.div`
  color: #444444;
  font-size: 16px;
  font-weight: 700;
  margin: 15px 0 8px;
  user-select: none;
`;

const ContainerMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
  user-select: none;
  button {
    padding: 5px 10px;
    color: #505bda;
    font-size: 16px;
    font-weight: 700;
    background: none;
    border: none;
  }
`;

const ContainerSubtitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 5px 0;
  user-select: none;
  p {
    color: rgba(68, 68, 68, 0.6);
    font-size: 14px;
    font-weight: 500;
    padding: 5px 10px;
  }
`;

export default MiLista;
