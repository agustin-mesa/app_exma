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
      transform: translateY(-1.25rem);
      opacity:0;
    }
    10%{
      transform: translateY(1.25rem);
      opacity:1;
    }
    100%{
      transform: translateY(1.25rem);
      opacity:1;
  }
`;
const LdsRing = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  animation: ${slideDown} 4s ease forwards;
  background: red;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;
    margin: 8px;
    border: 5px solid #505bda;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #505bda transparent transparent transparent;
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
