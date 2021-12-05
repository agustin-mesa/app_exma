import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

//---------------- CONTEXT ----------------
import { useAuth } from "../context/AuthContext";
//---------------- HOOKS ----------------
import useGetGastos from "../hooks/useGetGastos";
//---------------- date-fns ----------------
// Librería de fechas
import { format, fromUnixTime } from "date-fns";
import { es } from "date-fns/locale";
//---------------- STYLES ----------------
import { Boton, List } from "../components/elements/StyledElements";
//---------------- COMPONENTS ----------------
import MsgAlert from "../components/MsgAlert";
import GastoElement from "../components/GastoElement";
import ListElementLoad from "../components/ListElementLoad";

const MiLista = () => {
  const { user } = useAuth();

  const [loading, changeLoading] = useState(false);
  const [msgNoGastos, changeMsgNoGastos] = useState(false);
  const [gastos, cargarMasGastos, gastosPorCargar] = useGetGastos();

  const [alertState, changeAlertState] = useState(false);
  const [alert, changeAlert] = useState({});
  const [showMsgDeleted, changeShowMsgDeleted] = useState(false);

  const mostrarAlerta = (boolean, classAlert, msg) => {
    changeAlertState(boolean);
    changeAlert({
      classAlert: classAlert,
      msg: msg,
    });
  };

  // Formatea de milisegundos a formato fecha, Ej.: 1 de enero, 2022
  const formatDate = (fecha) => {
    return format(fromUnixTime(fecha), "dd 'de' MMMM', ' yyyy", { locale: es });
  };

  /*
    Al agregar un gasto en la misma fecha que otros gastos,
    se debe comparar si son las mismas o no, de ser así, se genera
    un grupo de gastos que se realizó en esta fecha.
  */
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
    }, 1000);
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
          <ListElementLoad />
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
          (() => {
            mostrarAlerta(true, "error", "Gasto eliminado.");
            setTimeout(changeShowMsgDeleted(false), 3000);
          })}

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
