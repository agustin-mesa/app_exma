import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const Gestion = () => {
  return (
    <ContainerGestion>
      <div className="bg-relative">
        <div className="gestion__background">
          <div className="gestion__monto">
            <span>$0,00</span>
            <p>TOTAL GASTADO EN EL MES</p>
          </div>
        </div>
        <Navigation />
      </div>
    </ContainerGestion>
  );
};

const ContainerGestion = styled.div`
  position: relative;
  margin-top: 50px;
  padding: 50px 20px;

  .bg-relative {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 40px;
    background: #ffffff;
  }

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
