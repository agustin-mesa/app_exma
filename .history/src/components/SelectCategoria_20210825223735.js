import React, { useState } from "react";
import styled from "styled-components";
import { IconCategory } from "./elements/StyledElements";
import iconComida from "./../images/icon_comida.png";
import iconHogar from "./../images/icon_hogar.png";
import iconCuentas from "./../images/icon_cuentas.png";
import iconCompras from "./../images/icon_compras.png";
import iconTransporte from "./../images/icon_transporte.png";
import iconSalud from "./../images/icon_salud.png";
import iconRopa from "./../images/icon_ropa.png";
import iconDiversion from "./../images/icon_diversion.png";

const SelectCategoria = ({ categoria, changeCategoria }) => {
  const [showSelect, changeShowSelect] = useState(false);

  const categorias = [
    { id: "comida", text: "Comida", icon: iconComida },
    { id: "hogar", text: "Hogar", icon: iconHogar },
    {
      id: "cuentas y pagos",
      text: "Cuentas y Pagos",
      icon: iconCuentas,
    },
    {
      id: "transporte",
      text: "Transporte",
      icon: iconTransporte,
    },
    { id: "ropa", text: "Ropa", icon: iconRopa },
    {
      id: "salud e higiene",
      text: "Salud e Higiene",
      icon: iconSalud,
    },
    { id: "compras", text: "Compras", icon: iconCompras },
    {
      id: "diversion",
      text: "Diversión",
      icon: iconDiversion,
    },
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
                  <IconCategory src={categoria.icon} alt={categoria.id} />
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
  padding: 10px 20px;
  width: 100%;
  border-radius: 50px;
  transition: all 0.2s ease;
  color: #505bda;
  font-family: Montserrat;
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
  align-items: center;
  padding: 5px 15px;
  transition: all 0.2s ease;
  span {
  }
  &:hover {
    background: rgba(80, 91, 218, 0.1);
  }
`;

export default SelectCategoria;
