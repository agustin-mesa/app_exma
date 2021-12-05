import React from "react";
import styled from "styled-components";
//---------------- COMPONENTS ----------------
import BtnRegresar from "../components/BtnRegresar";
import Perfil from "../components/Perfil";

const VerPefil = () => {
  return (
    <>
      <BtnRegresar className="margin" titulo="Mi perfil" />
      <ContainerVerPerfil>
        <div className="perfil">
          <Perfil />
          <div className="prox-actualizacion">
            <h3>Próxima actualización...</h3>
            <div className="wireframe-content-1">
              <div></div>
              <div></div>
            </div>
            <div className="wireframe-content-2">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </ContainerVerPerfil>
    </>
  );
};

const ContainerVerPerfil = styled.div`
  .perfil {
    display: flex;
    justify-content: center;
    flex-direction: column;
    user-select: none;
  }

  /******** ACTUALIZACIÓN ********/

  .prox-actualizacion {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 20px 0 0;
    text-align: center;
    h3 {
      color: var(--text__03);
      font-size: 16px;
      font-weight: 700;
    }
  }
  .wireframe-content-1 {
    display: flex;
    width: 100%;
    margin: 20px 0;
    div {
      width: 40px;
      background: var(--bg__09);
      height: 40px;
      border-radius: 50px;
    }
    div:last-child {
      margin: 0 0 0 10px;
      flex: 1;
    }
  }
  .wireframe-content-2 {
    display: flex;
    width: 100%;
    margin: 20px 0;
    div {
      width: 40px;
      background: var(--bg__09);
      height: 40px;
      border-radius: 50px;
    }
    div:last-child {
      height: 120px;
      margin: 0 0 0 10px;

      border-radius: 30px;
      flex: 1;
    }
  }
`;

export default VerPefil;
