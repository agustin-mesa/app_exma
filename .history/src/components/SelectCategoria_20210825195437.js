import React, { useState } from "react";
import styled from "styled-components";

const SelectCategoria = () => {
  return <ContainerSelect>asd</ContainerSelect>;
};

const ContainerSelect = styled.div`
  border-radius: 50px;
  border: solid 1px #505bda;
  cursor: pointer;
  width: 100%;
  padding: 10px 15px;
  transition: all 0.2s ease;
  color: #505bda;
  font-size: 14px;
  font-weight: 700;
  &:hover {
    background: rgba(80, 91, 218, 0.1);
  }
`;

export default SelectCategoria;