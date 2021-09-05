import React from "react";
import styled from "styled-components";
import { Boton } from "../components/elements/StyledElements";

const AddGasto = () => {
  return (
    <Formulario>
      <ContainerFilter>
        <label>Fecha</label>
        <p>Date Picker</p>
        <label>Categoría</label>
        <p>Select</p>
      </ContainerFilter>
      <div>
        <label>Descripción</label>
        <input
          type="text"
          name="descripcion"
          id="descripcion"
          placeholder="Ej: Mesa"
        />
        <input type="text" name="valor" id="valor" placeholder="$0.00" />
      </div>
      <Boton type="submit">Añadir gasto</Boton>
    </Formulario>
  );
};

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  background: red;

  label {
    color: #444444;
    font-size: 16px;
    font-weight: 700;
  }
`;

const ContainerFilter = styled.div``;

export default AddGasto;
