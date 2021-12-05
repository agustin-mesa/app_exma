import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import PhotoPerfil from "./PhotoPerfil";

const OptionMenu = ({
  icono,
  src,
  alt,
  userCheck,
  currentUser,
  opcion,
  texto,
  funcion,
  toLink,
}) => {
  return (
    <NavLink to={toLink}>
      <Item onClick={funcion}>
        <PhotoPerfil
          src={src}
          alt={alt}
          icono={icono}
          className="overlay__photo"
        />

        <div className="detalle">
          <span>
            {opcion}{" "}
            {currentUser && (
              <i
                className={
                  userCheck
                    ? "fas fa-check-circle checked"
                    : "far fa-check-circle"
                }
              ></i>
            )}
          </span>

          {texto !== "" && (
            <>
              <p>{texto}</p>
            </>
          )}
        </div>
      </Item>
    </NavLink>
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
  padding: 5px 10px;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
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

export default OptionMenu;
