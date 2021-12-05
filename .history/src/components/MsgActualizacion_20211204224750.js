import React from "react";
import styled from "styled-components";

//---------------- STYLES ----------------
import { H3, slideDown } from "../components/elements/StyledElements";

const MsgActualizacion = () => {
  return (
    <ContainerUpdate>
      <div className="msg">
        <div className="msg__header">
          <H3>Actualización</H3>
        </div>
        <div className="msg__info"></div>
      </div>
    </ContainerUpdate>
  );
};

const ContainerUpdate = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: var(--bg__11);
  .msg {
    position: fixed;
    border-radius: 15px;
    top: 20%;
    right: 20px;
    left: 20px;
    background: var(--bg__14);
    box-shadow: 0px 15px 20px var(--shadow__01);
    padding: 10px;
    animation: ${slideDown} 0.3s ease forwards;
    user-select: none;
    border: 1px solid var(--border__03);
  }
`;

export default MsgActualizacion;
