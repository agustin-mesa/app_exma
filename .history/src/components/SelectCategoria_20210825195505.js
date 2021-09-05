import React, { useState } from "react";
import styled from "styled-components";

const SelectCategoria = () => {
  return <ContainerSelect>asd</ContainerSelect>;
};

const ContainerSelect = styled.div`
  display: flex;
  justify-content: space-between;
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

export default SelectCategoria;
