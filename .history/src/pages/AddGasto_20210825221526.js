import React, { useState } from "react";
import styled from "styled-components";
import { Boton } from "../components/elements/StyledElements";
import SelectCategoria from "../components/SelectCategoria";

const AddGasto = () => {
  const [inputDescrip, changeInputDescrip] = useState("");
  const [inputValor, changeInputValor] = useState("");

  const [categoria, changeCategoria] = useState("comida");

  const handleChange = (e) => {
    if (e.target.name === "descripcion") {
      changeInputDescrip(e.target.value);
    } else if (e.target.name === "valor") {
      changeInputValor(e.target.value.replace(/[^0-9.]/g, ""));
    }
  };

  return (
    <Formulario>
      <ContainerFilter>
        <span>Fecha</span>
        <p>Date Picker</p>
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
