import styled, { keyframes } from "styled-components";
import backgroundHome from "../images/background_home.svg";

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
    box-shadow: 0px 3px 10px #505bda99;
  }
  100%{
    transform: translateY(0);
    box-shadow: 0px 8px 16px #505bda99;
  }
`;
const subir = keyframes`
  0%{
    transform: translateY(0);
  }
  50%{
    transform: translateY(-5px);
    box-shadow: 0px 8px 16px #505bda99;
  }
  100%{
    transform: translateY(0);
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
  &.action {
    box-shadow: none;
    background: #fff;
    color: #505bda;
    border: 1px solid #505bda;
    box-shadow: none;
  }
  &.action:focus {
    animation: ${subir} 0.8s ease forwards;
  }
`;

const HeaderAuth = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;

  img {
    margin: 20px 0;
  }
`;

const IconCategory = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  -webkit-filter: drop-shadow(0px 4px 4px #44444488);
  filter: drop-shadow(0px 4px 4px #44444488);
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

const showElement = keyframes`
  0% {
    opacity: 0;
  }100%{
    opacity: 1;
  }
`;

const ListElement = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  padding: 5px 5px;
  color: #444444;
  font-size: 14px;
  text-align: left;
  border-radius: 8px;
  transition: all 0.2s ease;
  animation: ${showElement} 0.5s ease forwards;
  user-select: none;

  p {
    font-weight: 500;
    flex: 1;
    word-break: break-word;
    padding: 0 5px 0 0;
  }
  span {
    font-weight: 700;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
  &:hover > .listElement__buttons {
    display: flex;
    animation: ${showElement} 0.5s ease forwards;
  }
  &.noHover:hover {
    background: transparent;
  }

  .listElement__buttons {
    display: none;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;

    button {
      background: none;
      border: none;
      outline: none;
      color: rgba(68, 68, 68, 0.3);
      padding: 6px;
      margin: 0 1px;
      transition: all 0.2s ease;
    }
    button:hover {
      color: rgba(68, 68, 68, 0.6);
    }
  }
`;

const LogoIcon = styled.img`
  width: 50px;
  &.grande {
    width: 150px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 15px;
  margin: 10px 0;
  border-radius: 50px;
  border: solid 1px rgba(68, 68, 68, 0.3);
  color: rgba(68, 68, 68, 0.3);
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    color: #505bda;
    border: solid 1px #505bda;
  }
  &::placeholder {
    color: rgba(68, 68, 68, 0.3);
    font-weight: 600;
  }
  &.input-valor {
    font-size: 1.8em;
  }
`;

const ContainerInicio = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &.withBackground{
    background-image: url(${backgroundHome});
  }
`;

export {
  ContainerInicio,
  LogoIcon,
  HeaderAuth,
  Input,
  Boton,
  IconCategory,
  BotonRegresar,
  ListElement,
  List,
};
