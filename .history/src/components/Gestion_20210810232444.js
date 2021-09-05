import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const Gestion = () => {
  return (
    <ContainerGestion>
      <div className="gestion__background">
        <div className="gestion__monto">
          <span>$0,00</span>
          <p>TOTAL GASTADO EN EL MES</p>
        </div>
      </div>
      <Navigation />
    </ContainerGestion>
  );
};

const ContainerGestion = styled.div`
  position: relative;
  border-radius: 40px;
  background: #ffffff;
  margin-top: 50px;
  padding: 50px 20px;
  height: 100vh;

  .gestion__background {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 20px 0;
    border-radius: 30px;
    background: #1a2849;
    position: absolute;
    top: -40px;
    left: 50px;
    right: 50px;
  }
`;

export default Gestion;