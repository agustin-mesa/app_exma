import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

const MsgAlert = ({ classAlert, msg }) => {
  return (
    <ContainerAlert classAlert={classAlert}>
      <p>{msg}</p>
    </ContainerAlert>
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
    90%{
        transform: translateY(1.25rem);
        opacity:1;
    }
    100%{
        transform: translateY(1.25rem);
        opacity:0;
    }
`;

const ContainerAlert = styled.div`
  z-index: 1000;
  width: 100%;
  left: 0;
  top: 1.25rem;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${slideDown} 4s ease forwards;

  p {
    background: ${(props) => {
      if (props.classAlert === "error") return "#CC2424";
      else if (props.classAlert === "exito") return "#24CCA7";
      else return "#000";
    }};
    padding: 15px 20px;
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    line-height: 25px;
    text-align: center;
    border-radius: 20px;
    box-shadow: 0px 8px 20px rgba(68, 68, 68, 0.5);
  }
`;

export default MsgAlert;
