import React, { useState } from "react";
import styled from "styled-components";
import { IconCategory } from "./elements/StyledElements";

const SelectCategoria = ({ categoria, changeCategoria }) => {
  const [showSelect, changeShowSelect] = useState(false);

  const categorias = [
    { id: "comida", text: "Comida", icon: "./../images/icon_comida.png" },
    { id: "hogar", text: "Hogar", icon: "./../images/icon_hogar.png" },
    {
      id: "cuentas y pagos",
      text: "Cuentas y Pagos",
      icon: "./../images/icon_cuentas.png",
    },
    {
      id: "transporte",
      text: "Transporte",
      icon: "./../images/icon_transporte.png",
    },
    { id: "ropa", text: "Ropa", icon: "./../images/icon_ropa.png" },
    {
      id: "salud e higiene",
      text: "Salud e Higiene",
      icon: "./../images/icon_salud.png",
    },
    { id: "compras", text: "Compras", icon: "./../images/icon_compras.png" },
    {
      id: "diversion",
      text: "Diversión",
      icon: "./../images/icon_diversion.png",
    },
  ];

  const handleClick = (e) => {
    changeCategoria(e.currentTarget.dataset.valor);
  };

  return (
    <ContainerSelect onClick={() => changeShowSelect(!showSelect)}>
      <OptionSelected>
        {categoria} <i className="fas fa-chevron-down"></i>
      </OptionSelected>
      {showSelect && (
        <OptionsMenu>
          <div className="options-menu__list">
            {categorias.map((categoria) => {
              return (
                <Option
                  key={categoria.id}
                  data-valor={categoria.text}
                  onClick={handleClick}
                >
                  {categoria.text}
                  <IconCategory src={categoria.icon}></IconCategory>
                </Option>
              );
            })}
          </div>
        </OptionsMenu>
      )}
    </ContainerSelect>
  );
};

const ContainerSelect = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 10px 20px;
  width: 100%;
  border-radius: 50px;
  transition: all 0.2s ease;
  color: #505bda;
  font-size: 14px;
  font-weight: 700;
  &:hover {
    background: rgba(80, 91, 218, 0.1);
  }
`;

const OptionSelected = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  span {
    width: 40px;
    height: 40px;
  }
`;

const OptionsMenu = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  border-radius: 30px;
  background: #fff;
  padding: 25px 0;
  max-height: 250px;
  box-shadow: 0px 15px 20px rgb(0 0 0 / 20%);
}


  .options-menu__list {
    position: relative;
    max-height: 200px;
    overflow-y: auto;
    border-radius: 7px;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 25px;
    right: 0;
    height: 25px;
    width: 100%;
    z-index: 1;
    background: linear-gradient(360deg, #fff, #ffffff00);
  }
  &::after {
    content: "";
    position: absolute;
    top: 25px;
    right: 0;
    width: 100%;
    height: 25px;
    z-index: 1;
    background: linear-gradient(180deg, #fff, #ffffff00);
  }
`;

const Option = styled.div`
  display: flex;
  padding: 12px;
  transition: all 0.2s ease;
  span {
    width: 40px;
    height: 40px;
  }
  &:hover {
    background: rgba(80, 91, 218, 0.1);
  }
`;

export default SelectCategoria;
