import React from "react";
import styled from "styled-components";

const AddGasto = () => {
  return (
    <Formulario>
      <ContainerFilter>
        <span>Fecha</span>
        <p>Date Picker</p>
        <span>Categoría</span>
        <p>Select</p>
      </ContainerFilter>
      <div>
        <span>Descripción</span>
        <input
          type="text"
          name="descripcion"
          id="descripcion"
          placeholder="Ej: Mesa"
        />
        <input type="text" name="valor" id="valor" placeholder="$0.00" />
      </div>
      <Boton>AÑADIR GASTO</Boton>
    </Formulario>
  );
};

const Formulario = styled.form``;

const ContainerFilter = styled.div``;

const Boton = styled.button`
  border-radius: 41px;
  background: #505bda;
`;

export default AddGasto;
