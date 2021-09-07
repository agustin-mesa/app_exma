import React, { useState } from "react";
import styled from "styled-components";
import { IconCategory } from "./elements/StyledElements";
import IconCategorias from "./IconCategorias";

const SelectCategoria = ({ categoria, changeCategoria }) => {
  const [showSelect, changeShowSelect] = useState(false);

  const categorias = [
    { id: "comida", text: "Comida" },
    { id: "hogar", text: "Hogar" },
    { id: "cuentas", text: "Cuentas y Pagos" },
    { id: "transporte", text: "Transporte" },
    { id: "ropa", text: "Ropa" },
    { id: "salud", text: "Salud e Higiene" },
    { id: "compras", text: "Compras" },
    { id: "diversión", text: "Diversión" },
  ];

  const handleClick = (e) => {
    changeCategoria(e.currentTarget.dataset.valor);
  };

  return (
    <ContainerSelect onClick={() => changeShowSelect(!showSelect)}>
      <OptionSelected>
        {categoria}
        <i className="fas fa-chevron-down"></i>
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
                  <IconCategorias nombre={categoria.text} />
                  {categoria.text}
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
  padding: 15px 20px;
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
`;

const OptionsMenu = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  border-radius: 30px;
  background: #fff;
  padding: 10px 0;
  max-height: 250px;
  box-shadow: 0px 15px 20px rgb(0 0 0 / 20%);
  overflow-y: overlay;

  .options-menu__list {
    position: relative;
    max-height: 200px;
    overflow-y: auto;
    border-radius: 7px;
    padding: 20px 0;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 9px;
    right: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    height: 25px;
    width: 100%;
    z-index: 1;
    background: linear-gradient(360deg, #fff, #ffffff00);
  }
  &::after {
    content: "";
    position: absolute;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    top: 10px;
    right: 0;
    width: 100%;
    height: 25px;
    z-index: 1;
    background: linear-gradient(180deg, #fff, #ffffff00);
  }
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

export default SelectCategoria;
