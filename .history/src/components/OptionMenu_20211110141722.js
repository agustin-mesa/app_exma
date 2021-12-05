import React from "react";
import styled from "styled-components";

const OptionMenu = ({ icono, opcion, texto }) => {
  return (
    <Item>
      <i className={icono}></i>

      <span>{opcion}</span>

      {texto !== "" && (
        <>
          <br />
          <p>{texto}</p>
        </>
      )}
    </Item>
  );
};

const Item = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: red;
`;

export default OptionMenu;
