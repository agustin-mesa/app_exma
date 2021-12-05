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
  width: 100%;
`;

export default OptionMenu;
