import React from "react";
import styled from "styled-components";

//---------------- STYLES ----------------
import { H3 } from "../components/elements/StyledElements";

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
    background: var(--bg__14);
    box-shadow: 0px 15px 20px var(--shadow__01);
    padding: 10px;
  }
`;

export default MsgActualizacion;
