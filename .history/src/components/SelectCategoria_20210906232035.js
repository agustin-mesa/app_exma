import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
//---------------- COMPONENTS ----------------
import IconCategorias from "./IconCategorias";

const SelectCategoria = ({ categoria, changeCategoria }) => {
  // Estado para mostrar el menú de selección
  const [showSelect, changeShowSelect] = useState(false);

  const categorias = [
    { id: "Comida" },
    { id: "Hogar" },
    { id: "Cuentas y Pagos" },
    { id: "Transporte" },
    { id: "Ropa" },
    { id: "Salud e Higiene" },
    { id: "Compras" },
    { id: "Diversión" },
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
                  data-valor={categoria.id}
                  onClick={handleClick}
                >
                  <IconCategorias nombre={categoria.id} />
                  {categoria.id}
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
  margin-top: 10px;
  padding: 15px 20px;
  width: 100%;
  border-radius: 50px;
  transition: all 0.2s ease;
  color: #505bda;
  font-size: 14px;
  font-weight: 700;
  background: rgba(80, 91, 218, 0.1);
  &:hover {
    background: rgba(80, 91, 218, 0.2);
  }
`;

const OptionSelected = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const slideDown = keyframes`
    0%{
      transform: translateY(-1.25rem);
      opacity:0;
    }
    100%{
      transform: translateY(1.25rem);
      opacity:1;
    }
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
  animation: ${slideDown} 0.3s ease forwards;

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
