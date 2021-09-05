import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "../components/DatePicker";
import fromUnixTime from "date-fns/fromUnixTime";
import getUnixTime from "date-fns/getUnixTime";
import addGasto from "../firebase/addGasto";
import { useAuth } from "../context/AuthContext";

// Components
import { Boton } from "../components/elements/StyledElements";
import SelectCategoria from "../components/SelectCategoria";
import MsgAlert from "../components/MsgAlert";

const AddGasto = () => {
  const [inputDescrip, changeInputDescrip] = useState("");
  const [inputValor, changeInputValor] = useState("");
  const [categoria, changeCategoria] = useState("Comida");
  const [fecha, changeFecha] = useState(new Date());
  const [alertState, changeAlertState] = useState(false);
  const [alert, changeAlert] = useState({});

  const { user } = useAuth();

  const handleChange = (e) => {
    if (e.target.name === "descripcion") {
      changeInputDescrip(e.target.value);
    } else if (e.target.name === "valor") {
      changeInputValor(e.target.value.replace(/[^0-9.]/g, ""));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Se transforma el valor del producto a un dato float, con 2 decimales
    let valor = parseFloat(inputValor).toFixed(2);

    // Validación del formulario
    if (inputDescrip !== "" && inputValor !== "") {
      if (valor) {
        addGasto({
          fecha: getUnixTime(fecha), // getUnixTime transforma una fecha a segundos
          categoria: categoria,
          descripcion: inputDescrip,
          precio: valor,
          emailUser: user.email,
        })
          .then(() => {
            changeInputDescrip("");
            changeCategoria("Hogar");
            changeInputValor("");
            changeFecha(new Date());
            changeAlertState(true);
            changeAlert({
              classAlert: "exito",
              msg: "¡Gasto agregado correctamente!",
            });
          })
          .catch((error) => {
            changeAlertState(true);
            changeAlert({
              classAlert: "error",
              msg: "Hubo un problema al intentar agregar el gasto.",
            });
          });
      } else {
        changeAlertState(true);
        changeAlert({
          classAlert: "error",
          msg: "Valor ingresado incorrecto.",
        });
      }
    } else {
      changeAlertState(true);
      changeAlert({
        classAlert: "error",
        msg: "Por favor, rellene los campos.",
      });
    }
  };

  return (
    <Formulario onSubmit={handleSubmit}>
      <ContainerFilter>
        <span>Fecha</span>
        <DatePicker fecha={fecha} changeFecha={changeFecha} />
        <span>Categoría</span>
        <SelectCategoria
          categoria={categoria}
          changeCategoria={changeCategoria}
        />
      </ContainerFilter>
      <ContainerInputs>
        <span>Descripción</span>
        <input
          type="text"
          name="descripcion"
          placeholder="Ej: Mesa"
          value={inputDescrip}
          onChange={handleChange}
        />
        <input
          type="text"
          name="valor"
          placeholder="$0.00"
          value={inputValor}
          onChange={handleChange}
        />
      </ContainerInputs>
      <Boton type="submit">Añadir gasto</Boton>
      <MsgAlert
        classAlert={alert.classAlert}
        msg={alert.msg}
        alertState={alertState}
        changeAlertState={changeAlertState}
      />
    </Formulario>
  );
};

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  span {
    color: #444444;
    font-size: 16px;
    font-weight: 700;
    margin: 20px 0 15px;
  }
  button {
    margin: 20px auto;
  }
`;

const ContainerFilter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    border: none;
    border-bottom: 1px solid rgba(68, 68, 68, 0.4);
    color: #444;
    font-weight: 500;
    margin: 10px 0;
    padding: 10px 5px;
    outline: none;
  }
  input::placeholder {
    color: rgba(68, 68, 68, 0.3);
    font-weight: 500;
  }
  input:nth-child(3)::placeholder {
    font-weight: 700;
  }
  input:nth-child(3) {
    text-align: center;
    font-size: 40px;
    font-weight: 700;
  }
`;

export default AddGasto;
