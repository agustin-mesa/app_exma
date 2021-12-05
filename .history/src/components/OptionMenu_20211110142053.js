import React from "react";
import styled from "styled-components";

const OptionMenu = ({ icono, opcion, texto }) => {
  return (
    <Item>
      <i className={icono}></i>

      <div className="detalle">
        <span>{opcion}</span>

        {texto !== "" && (
          <>
            <br />
            <p>{texto}</p>
          </>
        )}
      </div>
    </Item>
  );
};

const Item = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  background: rgba(80, 91, 218, 0.2);
  padding: 5px 10px;

  .detalle {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }
`;

export default OptionMenu;
