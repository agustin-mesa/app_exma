import styled from "styled-components";

/*
---------------------------------------------
      STYLED - ELEMENTOS REUTILIZABLES
---------------------------------------------
*/

const Boton = styled.button`
  box-shadow: 0px 8px 20px rgba(176, 99, 197, 0.5);
  border-radius: 50px;
  background: #505bda;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  margin-top: 20px;
  padding: 12px 25px;
  outline: none;
  border: none;
  transition: all 0.2s ease;
  &:hover {
    background: #4852c4;
  }
`;

const IconCategory = styled.img`
  width: 40px;
  height: 40px;
`;

export { Boton };
