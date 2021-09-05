import styled, { keyframes } from "styled-components";

/*
---------------------------------------------
      STYLED - ELEMENTOS REUTILIZABLES
---------------------------------------------
*/

const BotonRegresar = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  color: #444;
  font-size: 20px;
  background: transparent;
  border: none;
  outline: none;
`;

const hundir = keyframes`
  0%{
    transform: translateY(0);
    box-shadow: 0px 8px 16px #505bda99;
  }
  50%{
    transform: translateY(5px);
    box-shadow: 0px 3px 10px #505bda90;
  }
  100%{
    transform: translateY(0);
    box-shadow: 0px 8px 16px #505bda99;
  }
`;

const Boton = styled.button`
  border-radius: 50px;
  background: #505bda;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  margin-top: 20px;
  padding: 12px 25px;
  outline: none;
  box-shadow: 0px 8px 16px #505bda99;
  border: none;
  transition: all 0.2s ease;
  user-select: none;
  &:focus {
    background: #4852c4;
    animation: ${hundir} 0.8s ease forwards;
  }
`;

const IconCategory = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export { Boton, IconCategory, BotonRegresar };
