import React from "react";
import styled from "styled-components";

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

const LdsRing = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 50px;

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
