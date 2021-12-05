import React from "react";
import styled from "styled-components";

const OptionMenu = ({ icono, src, alt, userCheck, opcion, texto, funcion }) => {
  return (
    <Item onClick={funcion}>
      {src !== "" ? <Photo src={src} alt={alt} /> : <i className={icono}></i>}

      <div className="detalle">
        <span>
          {opcion}{" "}
          {userCheck && <i className="fas fa-check-circle checked"></i>}
        </span>

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
  border-radius: 15px;
  transition: all 0.2s ease;
  padding: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis 50%;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  i {
    font-size: 25px;
    width: 30px;
    margin: 0 15px 0 0;
  }

  .detalle {
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
      i {
        font-size: 10px;
        color: rgba(68, 68, 68, 0.6);
      }
      i.checked {
        color: #24cca7;
      }
    }
    p {
      color: rgba(68, 68, 68, 0.6);
      font-size: 13px;
      font-weight: 500;
    }
  }
`;

const Photo = styled.img`
  display: flex;
  justify-content: flex-end;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin: 0 15px 0 0;
`;

export default OptionMenu;
