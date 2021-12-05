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
  background: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  transition: all 0.2s ease;
  padding: 5px 10px;

  i {
    margin: 20px;
    font-size: 25px;
  }

  .detalle {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    span {
      margin: 0;
      width: 100%;
      background: red;
    }
    p {
      background: green;
    }
  }
`;

export default OptionMenu;
