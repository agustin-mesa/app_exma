import React, { useState } from "react";
import styled from "styled-components";
//---------------- COMPONENTS ----------------
import IconCategorias from "./IconCategorias";

import { slideDown } from "./elements/StyledElements";

const SelectCategoria = ({ categoria, changeCategoria }) => {
  // Estado para mostrar el menú de selección
  const [showSelect, changeShowSelect] = useState(false);

  const categorias = [
    { id: "Comida" },
    { id: "Hogar" },
    { id: "Cuentas y Pagos" },
    { id: "Venta" },
    { id: "Transporte" },
    { id: "Ropa" },
    { id: "Salud e Higiene" },
    { id: "Compras" },
    { id: "Diversión" },
    { id: "Tecnología" },
    { id: "Mascota" },
    { id: "Otros" },
  ];

  const handleClick = (e) => {
    changeCategoria(e.currentTarget.dataset.valor);
  };

  const handleMenuOnClick = () =>
    setTimeout(() => changeShowSelect(!showSelect), 50);
  const handleMenuOnBlur = () => setTimeout(() => changeShowSelect(false), 50);

  return (
    <ContainerSelect
      tabIndex="1"
      onBlur={handleMenuOnBlur}
      onClick={handleMenuOnClick}
    >
      <OptionSelected>
        <IconCategorias nombre={categoria} />
        <p>{categoria}</p>
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
  color: var(--text__03);
  font-size: 14px;
  font-weight: 700;
  background: var(--bg__04);
  user-select: none;
  &:hover {
    background: var(--bg__06);
  }
`;

const OptionSelected = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  p {
    flex: 1;
  }
`;

const OptionsMenu = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  border-radius: 15px;
  background: var(--bg__14);
  padding: 10px 0;
  max-height: 250px;
  box-shadow: 0px 15px 20px var(--shadow__01);
  overflow-y: overlay;
  border: 1px solid var(--border__03);
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
    background: linear-gradient(360deg, var(--bg__14), transparent);
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
    background: linear-gradient(180deg, var(--bg__14), transparent);
  }
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  border-radius: 15px;
  transition: all 0.2s ease;

  &:hover {
    background: var(--bg__09);
  }
`;

export default SelectCategoria;
