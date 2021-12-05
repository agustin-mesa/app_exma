import styled, { keyframes } from "styled-components";

/*
---------------------------------------------
            STYLES REUTILIZABLES
---------------------------------------------
*/

const BotonRegresar = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  color: var(--icono__02);
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
    box-shadow: 0px 8px 16px var(--shadow__02);
  }
  50%{
    transform: translateY(5px);
    box-shadow: 0px 3px 10px var(--shadow__02);
  }
  100%{
    transform: translateY(0);
    box-shadow: 0px 8px 16px var(--shadow__02);
  }
`;
const subir = keyframes`
  0%{
    transform: translateY(0);
  }
  50%{
    transform: translateY(-5px);
    box-shadow: 0px 8px 16px var(--shadow__02);
  }
  100%{
    transform: translateY(0);
  }
`;

const Boton = styled.button`
  border-radius: 50px;
  background: var(--bg__03);
  color: var(--text__02);
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  margin-top: 20px;
  padding: 12px 25px;
  outline: none;
  box-shadow: 0px 8px 16px var(--shadow__02);
  border: none;
  transition: all 0.2s ease;
  user-select: none;
  &:focus {
    background: var(--bg__07);
    animation: ${hundir} 0.8s ease forwards;
  }
  &.action {
    box-shadow: none;
    background: #fff;
    color: #505bda;
    border: 1px solid var(--border__02);
    box-shadow: none;
  }
  &.action:focus {
    animation: ${subir} 0.8s ease forwards;
  }
`;

const H3 = styled.h3`
  color: var(--text__03);
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
    color: var(--icono__02);
    font-size: 1.8em;
  }

  &.overlay__photo {
    justify-content: center;
    width: 50px;
    margin: 0 15px 0 0;
  }

  &.perfil__photo {
    background: var(--bg__03);
    justify-content: center;
    border-radius: 50px;
    width: 90px;
    height: 90px;
    i {
      color: var(--text__02);
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
  -webkit-filter: drop-shadow(0px 4px 4px var(--shadow__03));
  filter: drop-shadow(0px 4px 4px var(--shadow__03));
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
  color: var(--text__01);
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
    background: var(--bg__08);
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
      color: var(--text__04);
      padding: 6px;
      margin: 0 1px;
      transition: all 0.2s ease;
    }
    button:hover {
      color: var(--text__05);
    }
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 15px;
  margin: 10px 0;
  border-radius: 50px;
  border: solid 1px var(--border__01);
  color: var(--text__01);
  background: var(--bg__01);
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    color: var(--text__02);
    border: solid 1px var(--border__02);
  }
  &::placeholder {
    color: var(--text__05);
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
    background: var(--bg__09);
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
      var(--bg__10) 50%,
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
