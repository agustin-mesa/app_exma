import React from "react";
import styled from "styled-components";

const MsgActualizacion = () => {
  return (
    <ContainerUpdate>
      <div className="msg"></div>
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
`;

export default MsgActualizacion;
