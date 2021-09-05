import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import styled, { keyframes } from "styled-components";
import { useAuth } from "../context/AuthContext";
import useGetGastos from "../hooks/useGetGastos";
import formatearValor from "../functions/formatearValor";
import { Link } from "react-router-dom";
import { format, fromUnixTime } from "date-fns";
import { es } from "date-fns/locale";
import borrarGasto from "../firebase/borrarGasto";

import IconCategorias from "../components/IconCategorias";
import { Boton } from "../components/elements/StyledElements";
import LoadSpinner from "../components/LoadSpinner";
import MsgAlert from "../components/MsgAlert";

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
    setTimeout(() => {
      changeLoading(false);
      changeMsgNoGastos(true);
    }, 2000);
  }, []);

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
          gastos.map((gasto, i) => {
            return (
              <div key={i}>
                {!compararFecha(gastos, i, gasto) && (
                  <Fecha>{formatDate(gasto.fecha)}</Fecha>
                )}

                <ListElement key={gasto.idGasto}>
                  <IconCategorias nombre={gasto.categoria} />
                  <p>{gasto.descripcion}</p>
                  <span>{formatearValor(gasto.precio)}</span>
                  <div className="listElement__buttons">
                    <Link to={`/gestion/mi-lista/${gasto.idGasto}`}>
                      <button>
                        <i className="fas fa-pen"></i>
                      </button>
                    </Link>
                    <button
                      onClick={() =>
                        changeShowMsgDeleted(
                          borrarGasto(gasto.idGasto, user.email)
                        )
                      }
                    >
                      <i className="far fa-trash-alt"></i>
                    </button>
                  </div>
                </ListElement>
              </div>
            );
          })
        )}
        {gastos.length > 9
          ? gastosPorCargar && (
              <ContainerMore>
                <button onClick={() => cargarMasGastos()}>Cargar más...</button>
              </ContainerMore>
            )
          : ""}
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
`;

const Fecha = styled.div`
  color: #444444;
  font-size: 16px;
  font-weight: 700;
  margin: 15px 0 8px;
  user-select: none;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

const showElement = keyframes`
  0% {
    opacity: 0;
  }100%{
    opacity: 1;
  }
`;

const ListElement = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  padding: 5px 5px;
  color: #444444;
  font-size: 14px;
  text-align: left;
  border-radius: 8px;
  transition: all 0.2s ease;
  animation: ${showElement} 0.5s ease forwards;

  p {
    font-weight: 500;
    flex: 1;
  }
  span {
    font-weight: 700;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
  &:hover > .listElement__buttons {
    display: flex;
    animation: ${showElement} 0.5s ease forwards;
  }
  .listElement__buttons {
    display: none;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;

    button {
      background: none;
      border: none;
      outline: none;
      color: rgba(68, 68, 68, 0.3);
      padding: 6px;
      margin: 0 1px;
      transition: all 0.2s ease;
    }
    button:hover {
      color: rgba(68, 68, 68, 0.6);
    }
  }
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