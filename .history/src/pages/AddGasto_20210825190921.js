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
        <Boton type="submit">Añadir gasto</Boton>
      </ContainerInputs>
    </Formulario>
  );
};

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  background: red;

  span {
    color: #444444;
    font-size: 16px;
    font-weight: 700;
  }
`;

const ContainerFilter = styled.div``;

const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  input {
    border: 1px solid rgba(68, 68, 68, 0.4);
  }
`;

export default AddGasto;
