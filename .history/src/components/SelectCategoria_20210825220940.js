import React, { useState } from "react";
import styled from "styled-components";
import { IconCategory } from "./elements/StyledElements";

const SelectCategoria = () => {
  const [showSelect, changeShowSelect] = useState(false);

  const categorias = [
    { id: "comida", text: "Comida" },
    { id: "hogar", text: "Hogar" },
    { id: "cuentas y pagos", text: "Cuentas y Pagos" },
    { id: "transporte", text: "Transporte" },
    { id: "ropa", text: "Ropa" },
    { id: "salud e higiene", text: "Salud e Higiene" },
    { id: "compras", text: "Compras" },
    { id: "diversion", text: "Diversión" },
  ];

  return (
    <ContainerSelect onClick={() => changeShowSelect(!showSelect)}>
      <OptionSelected>
        Comida <i className="fas fa-chevron-down"></i>
      </OptionSelected>
      {showSelect && (
        <OptionsMenu>
          <div className="options-menu__list">
            {categorias.map((categoria, i) => {
              return <Option key={i}>{categoria.text}</Option>;
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
  border: solid 1px #505bda;
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
    bottom: 18px;
    right: 0;
    height: 25px;
    width: 100%;
    z-index: 1;
    background: linear-gradient(360deg, #fff, #ffffff00);
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
  }
  &::after {
    content: "";
    position: absolute;
    top: 20px;
    right: 0;
    width: 100%;
    height: 25px;
    z-index: 1;
    background: linear-gradient(180deg, #fff, #ffffff00);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
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
