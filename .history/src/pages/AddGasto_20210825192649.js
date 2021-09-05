import React from "react";
import styled from "styled-components";
import { Boton } from "../components/elements/StyledElements";

const AddGasto = () => {
  return (
    <Formulario>
      <ContainerFilter>
        <span>Fecha</span>
        <p>Date Picker</p>
        <span>Categoría</span>
        <p>Select</p>
      </ContainerFilter>
      <ContainerInputs>
        <span>Descripción</span>
        <input
          type="text"
          name="descripcion"
          id="descripcion"
          placeholder="Ej: Mesa"
        />
        <input type="text" name="valor" id="valor" placeholder="$0.00" />
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
