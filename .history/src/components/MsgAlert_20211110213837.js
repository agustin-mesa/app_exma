import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

const MsgAlert = ({ classAlert, msg, alertState, changeAlertState }) => {
  useEffect(() => {
    let tiempo;

    if (alertState) {
      tiempo = setTimeout(() => {
        changeAlertState(false);
      }, 4000);
    }

    return () => {
      clearTimeout(tiempo);
    };
  }, [alertState, changeAlertState]);

  return (
    <>
      {alertState && (
        <ContainerAlert classAlert={classAlert}>
          <p>{msg}</p>
        </ContainerAlert>
      )}
    </>
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
  position: fixed;
  width: 100%;
  left: 0;
  top: 1.25rem;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${slideDown} 4s ease forwards;

  p {
    background: ${(props) => {
      if (props.classAlert === "error") return "#CC2424";
      else if (props.classAlert === "exito") return "#24CCA7";
      else if (props.classAlert === "alerta") return "#E8B60F";
      else return "#000";
    }};
    padding: 15px 20px;
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    line-height: 25px;
    text-align: center;
    border-radius: 20px;
    box-shadow: 0px 8px 16px rgba(68, 68, 68, 0.3);
    margin: 0 20px;
  }
`;

export default MsgAlert;
