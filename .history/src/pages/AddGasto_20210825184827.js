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
  box-shadow: 0px 8px 20px rgba(176, 99, 197, 0.5);
  border-radius: 50px;
  background: #505bda;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  margin-top: 20px;
  padding: 12px 25px;
  outline: none;
  border: none;
  transition: all 0.2s ease;
  &:hover {
    background: #4852c4;
  }
`;

export default AddGasto;
