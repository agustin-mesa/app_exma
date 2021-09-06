import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DatePicker from "../components/DatePicker";
import fromUnixTime from "date-fns/fromUnixTime";
import getUnixTime from "date-fns/getUnixTime";
import addGasto from "../firebase/addGasto";
import { useAuth } from "../context/AuthContext";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";
import editarGasto from "../firebase/editarGasto";

// Components
import Footer from "../components/Footer";
import { Boton, Input } from "../components/elements/StyledElements";
import SelectCategoria from "../components/SelectCategoria";
import MsgAlert from "../components/MsgAlert";

const AddGasto = ({ gasto }) => {
  const [inputDescrip, changeInputDescrip] = useState("");
  const [inputValor, changeInputValor] = useState("");
  const [categoria, changeCategoria] = useState("Comida");
  const [fecha, changeFecha] = useState(new Date());
  const [alertState, changeAlertState] = useState(false);
  const [alert, changeAlert] = useState({});

  const history = useHistory();
  const { user } = useAuth();

  useEffect(() => {
    // Se comprueba si hay algún gasto en el formulario
    // De ser así se establece su state
    if (gasto) {
      // Se comprueba que el gasto sea del usuario actual con su email
      if (user.email) {
        changeFecha(fromUnixTime(gasto.data().fecha));
        changeCategoria(gasto.data().categoria);
        changeInputDescrip(gasto.data().descripcion);
        changeInputValor(gasto.data().precio);
      } else {
        history.push("/gestion/mi-lista");
      }
    }
  }, [gasto, user.email, history]);

  const handleChange = (e) => {
    if (e.target.name === "descripcion") {
      if (inputDescrip.length < 50) changeInputDescrip(e.target.value);
      else {
        console.log(inputDescrip.length);
        changeInputDescrip(e.target.value.slice(0, 50));
        changeAlertState(true);
        changeAlert({
          classAlert: "error",
          msg: "Máximo caracteres alcanzado (50/50)",
        });
      }
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
        if (gasto) {
          editarGasto({
            fecha: getUnixTime(fecha),
            categoria: categoria,
            descripcion: inputDescrip,
            precio: valor,
            emailUser: user.email,
            idGasto: gasto.data().idGasto,
          })
            .then(() => {
              history.push("/gestion/mi-lista");
            })
            .catch((error) => {
              changeAlertState(true);
              changeAlert({
                classAlert: "error",
                msg: "Ocurrió un error al intentar editar",
              });
            });
        } else {
          addGasto({
            fecha: getUnixTime(fecha), // getUnixTime transforma una fecha a segundos
            categoria: categoria,
            descripcion: inputDescrip,
            precio: valor,
            emailUser: user.email,
            idGasto: uuidv4(),
          })
            .then(() => {
              changeInputDescrip("");
              changeCategoria("Comida");
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
        }
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
        <Input
          type="text"
          name="descripcion"
          placeholder="Ej: Mesa"
          value={inputDescrip}
          onChange={handleChange}
          autoComplete="off"
        />
        <Input
          className="input-valor"
          type="text"
          name="valor"
          placeholder="$0.00"
          value={inputValor}
          onChange={handleChange}
          autoComplete="off"
        />
      </ContainerInputs>
      <Boton type="submit">Añadir gasto</Boton>
      <MsgAlert
        classAlert={alert.classAlert}
        msg={alert.msg}
        alertState={alertState}
        changeAlertState={changeAlertState}
      />
      <Footer />
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
    margin: 20px 0 5px;
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
`;

export default React.memo(AddGasto);
