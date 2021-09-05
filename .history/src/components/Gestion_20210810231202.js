import React from "react";
import styled from "styled-components";

const Gestion = () => {
  return (
    <ContainerGestion>
      <div className="gestion__background">
        <div className="gestion__monto"></div>
      </div>
    </ContainerGestion>
  );
};

const ContainerGestion = styled.div`
  position: relative;

  .gestion__background {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export default Gestion;
