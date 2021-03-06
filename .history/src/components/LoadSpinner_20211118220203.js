import React from "react";
import styled, { keyframes } from "styled-components";

const LoadSpinner = () => {
  return (
    <LdsRing>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LdsRing>
  );
};
const slideDown = keyframes`
    0%{
      opacity:0;
    }
    100%{
      opacity:1;
    }
`;
const LdsRing = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${slideDown} 0.5s ease forwards;
  background: var(--bg__11);
  z-index: 999;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;
    margin: 8px;
    border: 5px solid var(--border__02);
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--border__02) transparent transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoadSpinner;
