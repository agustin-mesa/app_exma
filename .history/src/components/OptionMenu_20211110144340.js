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
  border-radius: 15px;
  transition: all 0.2s ease;
  padding: 10px;

  i {
    font-size: 25px;
    padding: 10px;
  }

  .detalle {
    margin: 0 0 0 15px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    span {
      width: 100%;
      color: #444444;
      font-size: 14px;
      font-weight: 700;
    }
    p {
      color: rgba(68, 68, 68, 0.6);
      font-size: 13px;
      font-weight: 500;
    }
  }
`;

export default OptionMenu;
