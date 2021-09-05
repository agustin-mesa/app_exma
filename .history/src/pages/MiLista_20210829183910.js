import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { useAuth } from "../context/AuthContext";
import useGetGastos from "../hooks/useGetGastos";
import formatearValor from "../functions/formatearValor";
import { Link } from "react-router-dom";
import { format, fromUnixTime } from "date-fns";
import { es } from "date-fns/locale";

import IconCategorias from "../components/IconCategorias";
import { Boton } from "../components/elements/StyledElements";

const MiLista = () => {
  const { user } = useAuth();
  const gastos = useGetGastos();

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

  return (
    <>
      <Helmet>
        {/* <link rel="shortcut icon" href="" type="image/x-icon" /> */}
        <title>Mi lista</title>
      </Helmet>
      <List>
        {gastos.map((gasto, i) => {
          return (
            <div key={i}>
              {!compararFecha(gastos, i, gasto) && (
                <Fecha>{formatDate(gasto.fecha)}</Fecha>
              )}

              <ListElement key={gasto.idGasto}>
                <IconCategorias nombre={gasto.categoria} />
                <p>{gasto.descripcion}</p>
                <span>{formatearValor(gasto.precio)}</span>
                <ContainerButtons>
                  <Link to={`/editar/${gasto.idGasto}`}>
                    <button>
                      <i className="fas fa-pen"></i>
                    </button>
                  </Link>
                  <button>
                    <i className="far fa-trash-alt"></i>
                  </button>
                </ContainerButtons>
              </ListElement>
            </div>
          );
        })}
        <ContainerSeeMore>
          <button>Cargar más...</button>
        </ContainerSeeMore>

        {gastos.length === 0 && (
          <ContainerSubtitle>
            <p>No hay gastos en tu lista</p>
            <Link to="/gestion">
              <Boton>Agregar gasto</Boton>
            </Link>
          </ContainerSubtitle>
        )}
      </List>
    </>
  );
};

const Fecha = styled.div`
  color: #444444;
  font-size: 16px;
  font-weight: 700;
  margin: 15px 0 8px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
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

  p {
    font-weight: 500;
    flex: 1;
  }
  span {
    font-weight: 700;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.07);
  }
`;

const ContainerButtons = styled.div`
  display: flex;
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
`;

const ContainerSeeMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
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
  p {
    color: rgba(68, 68, 68, 0.6);
    font-size: 16px;
    font-weight: 500;
    padding: 5px 10px;
  }
`;

export default MiLista;
