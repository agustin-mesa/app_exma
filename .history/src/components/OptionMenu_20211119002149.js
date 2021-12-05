import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import PhotoPerfil from "./PhotoPerfil";
import UserChecked from "./UserChecked";
import ModeDark from "./ModeDark";

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
  withIcon,
  modeDarkButton,
}) => {
  return (
    <NavLink to={toLink}>
      <Item onClick={funcion}>
        {currentUser && (
          <PhotoPerfil
            src={src}
            alt={alt}
            icono={icono}
            className="overlay__photo"
          />
        )}
        {withIcon && <i className={icono + " item__icon"}></i>}

        <div className="detalle">
          <span>
            {opcion}{" "}
            {currentUser && (
              <UserChecked emailChecked={userCheck} fontSize="10" />
            )}
          </span>

          {texto !== "" && (
            <>
              <p>{texto}</p>
            </>
          )}
          {modeDarkButton && <ModeDark />}
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
    background: var(--bg__02);
  }

  i.item__icon {
    font-size: 1.8em;
    margin: 0 5px 0 0;
    padding: 5px;
    width: 50px;
    text-align: center;
  }

  .detalle {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    span {
      color: var(--text__01);
      font-size: 14px;
      font-weight: 700;
    }
    p {
      color: var(--text__06);
      font-size: 12px;
      line-height: 16px;
      font-weight: 500;
    }
  }
`;

export default OptionMenu;
