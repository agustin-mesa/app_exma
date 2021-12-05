import styled, { keyframes } from "styled-components";

import * as colors from "./colors.module.scss";

/*
---------------------------------------------
            STYLES REUTILIZABLES
---------------------------------------------
*/

const BotonRegresar = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  color: ${colors.text__01};
  font-size: 20px;
  background: transparent;
  border: none;
  outline: none;
`;

const slideDown = keyframes`
    0%{
      transform: translateY(-1.25rem);
      opacity:0;
    }
    100%{
      transform: translateY(0rem);
      opacity:1;
    }
`;

const hundir = keyframes`
  0%{
    transform: translateY(0);
    box-shadow: 0px 8px 16px ${colors.violetblueOpac__06};
  }
  50%{
    transform: translateY(5px);
    box-shadow: 0px 3px 10px ${colors.violetblueOpac__06};
  }
  100%{
    transform: translateY(0);
    box-shadow: 0px 8px 16px ${colors.violetblueOpac__06};
  }
`;
const subir = keyframes`
  0%{
    transform: translateY(0);
  }
  50%{
    transform: translateY(-5px);
    box-shadow: 0px 8px 16px ${colors.violetblueOpac__06};
  }
  100%{
    transform: translateY(0);
  }
`;

const Boton = styled.button`
  border-radius: 50px;
  background: ${colors.bg__03};
  color: ${colors.text__02};
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  margin-top: 20px;
  padding: 12px 25px;
  outline: none;
  box-shadow: 0px 8px 16px ${colors.violetblueOpac__06};
  border: none;
  transition: all 0.2s ease;
  user-select: none;
  &:focus {
    animation: ${hundir} 0.8s ease forwards;
  }
  &.action {
    box-shadow: none;
    background: #fff;
    color: ${colors.text__03};
    border: 1px solid ${colors.violetblue};
    box-shadow: none;
  }
  &.action:focus {
    animation: ${subir} 0.8s ease forwards;
  }
`;

const H3 = styled.h3`
  color: ${colors.text__03};
  font-size: 1.3em;
  font-weight: 700;
  text-align: center;
  margin: 20px 0;
`;

const HeaderAuth = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Photo = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 40px;
  height: 40px;

  img {
    border-radius: 50px;
  }
  i {
    color: #444;
    font-size: 1.8em;
  }

  &.overlay__photo {
    justify-content: center;
    width: 50px;
    margin: 0 15px 0 0;
  }

  &.perfil__photo {
    background: ${colors.bg__03};
    justify-content: center;
    border-radius: 50px;
    width: 90px;
    height: 90px;
    i {
      color: ${colors.icono__01};
      font-size: 3.5em;
    }
  }
`;

const LogoIcon = styled.img`
  width: 50px;
  &.grande {
    margin: 30px 0 10px;
    width: 120px;
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
  padding: 0 0 30px;
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
  color: ${colors.text__black};
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
    background: ${colors.bg__blackOpac_01};
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

const Input = styled.input`
  width: 100%;
  padding: 10px 15px;
  margin: 10px 0;
  border-radius: 50px;
  border: solid 1px ${colors.border__blackOpac_03};
  color: rgba(68, 68, 68, 0.9);
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    color: #505bda;
    border: solid 1px #505bda;
  }
  &::placeholder {
    color: rgba(68, 68, 68, 0.5);
    font-weight: 600;
  }
`;

const load = keyframes`
    0% {
        left: -60px;
    }
    100%   {
        left: 100%;
    }
    `;

const ListElementLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 5px 0;
  padding: 5px 5px;
  border-radius: 8px;
  transition: all 0.2s ease;
  div {
    position: relative;
    background: rgba(220, 220, 220, 0.3);
    border-radius: 12px;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }
  div::before {
    content: "";
    display: block;
    position: absolute;
    left: -60px;
    top: 0;
    height: 40px;
    width: 40px;
    background: linear-gradient(
      to right,
      transparent 0%,
      #e8e8e8 50%,
      transparent 100%
    );
    animation: ${load} 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }

  div:nth-child(2) {
    flex: 1;
    height: 15px;
    margin: 0 60px 0 10px;
  }
  div:nth-child(3) {
    height: 15px;
  }
`;

export {
  LogoIcon,
  HeaderAuth,
  Input,
  Boton,
  IconCategory,
  BotonRegresar,
  ListElement,
  List,
  ListElementLoading,
  slideDown,
  H3,
  showElement,
  Photo,
};
