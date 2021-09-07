import React, { useState } from "react";
import styled from "styled-components";

const SelectCategoria = () => {
  return <ContainerSelect>asd</ContainerSelect>;
};

const ContainerSelect = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 10px 15px;
  width: 100%;
  border-radius: 50px;
  border: solid 1px #505bda;
  cursor: pointer;
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
  position: absollute;
  top: 50px;
  left: 0;
  widht: 100%;
  border-radius: 30px;
  border: solid 1px #505bda;
  background: #fff;
  padding: 20px 0;
  max-height: 250px;
  overflow-y: auto;
`;

const Option = styled.div`
  display: flex;
  padding: 10px 15px;
  span {
    width: 40px;
    height: 40px;
  }
  &:hover {
  }
`;

export default SelectCategoria;
