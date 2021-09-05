import React from "react";
import styled from "styled-components";

const IsNotMobile = () => {
  return (
    <ContainerIsNotMobile>
      <p>
        <b>EXMA</b>
      </p>
    </ContainerIsNotMobile>
  );
};

const ContainerIsNotMobile = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
  }
`;

export default IsNotMobile;
