import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import OptionMenu from "./OptionMenu";
import MsgAlert from "./MsgAlert";

//---------------- FIREBASE ----------------
import { auth } from "../firebase/firebase";

import { slideDown } from "./elements/StyledElements";

const MenuOptions = () => {
  // useHistory para luego hacer push y redireccionar
  const history = useHistory();
  // Mostrar overlay
  const [showMenu, changeShowMenu] = useState(false);
  // Alertas
  const [alertState, changeAlertState] = useState(false);
  const [alert, changeAlert] = useState({});

  const mostrarAlerta = (boolean, classAlert, msg) => {
    changeAlertState(boolean);
    changeAlert({
      classAlert: classAlert,
      msg: msg,
    });
  };

  // Función asíncrona para cerrar sesión
  const signOut = async () => {
    try {
      // Función de Firebase para cerrar sesión con cualquier proveedor
      // (Facebook, Gmail o Email-Password)
      await auth.signOut();
      history.push("/login");
    } catch (error) {
      let msg;

      switch (error.code) {
        default:
          msg = "Hubo un error al intentar cerrar sesión, inténtalo más tarde.";
          break;
      }
      mostrarAlerta(true, "error", msg);
    }
  };
  const handleMenu = () => {
    console.log("asdasd");
    setTimeout(() => changeShowMenu(!showMenu), 100);
  };

  return (
    <>
      <Photo onClick={() => changeShowMenu(!showMenu)}>
        {auth.currentUser ? (
          auth.currentUser.photoURL ? (
            <img
              src={auth.currentUser.photoURL}
              alt={auth.currentUser.displayName}
            />
          ) : (
            <i className="far fa-user"></i>
          )
        ) : (
          ""
        )}
      </Photo>
      {showMenu && (
        <ContainerMenuOptions
          onFocus={() => setTimeout(() => changeShowMenu(!showMenu), 100)}
          onBlur={() => handleMenu()}
        >
          {auth.currentUser ? (
            auth.currentUser.photoURL ? (
              <OptionMenu
                icono="far fa-user"
                currentUser={auth.currentUser}
                src={auth.currentUser.photoURL}
                alt={auth.currentUser.displayName}
                userCheck={auth.currentUser.emailVerified}
                opcion={auth.currentUser.displayName}
                texto="Ver tu perfil"
                toLink=""
              />
            ) : (
              <OptionMenu
                icono="far fa-user"
                currentUser={auth.currentUser}
                src=""
                userCheck={auth.currentUser.emailVerified}
                opcion={auth.currentUser.displayName}
                texto="Ver tu perfil"
                toLink=""
              />
            )
          ) : (
            ""
          )}

          <hr />
          <OptionMenu
            icono="far fa-comments"
            opcion="Enviar comentarios"
            src=""
            texto="Ayúdanos a mejorar la nueva versión de EXMA"
            toLink="/enviar-comentario"
          />
          <hr />
          <OptionMenu
            icono="fas fa-cog"
            src=""
            opcion="Configuración"
            texto=""
            toLink="/enviar-comentario"
          />
          <OptionMenu
            icono="fas fa-moon"
            src=""
            opcion="Pantalla y accesibilidad"
            texto=""
            toLink="/enviar-comentario"
          />
          <OptionMenu
            icono="fas fa-sign-out-alt"
            opcion="Cerrar sesión"
            src=""
            texto=""
            funcion={signOut}
            toLink="/enviar-comentario"
          />
          <MsgAlert
            classAlert={alert.classAlert}
            msg={alert.msg}
            alertState={alertState}
            changeAlertState={changeAlertState}
          />
        </ContainerMenuOptions>
      )}
    </>
  );
};

const ContainerMenuOptions = styled.ul`
  position: absolute;
  z-index: 999;
  border-radius: 30px;
  top: 50px;
  right: 20px;
  left: 20px;
  background: #ffffff;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.2);
  padding: 10px;
  animation: ${slideDown} 0.3s ease forwards;
  user-select: none;

  hr {
    margin: 5px 0;
    border: solid 1px rgba(0, 0, 0, 0.2);
  }
  a {
    color: #444;
  }
`;

const Photo = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 40px;
  height: 40px;

  img {
    border-radius: 50px;
  }
  i {
    color: #444;
    font-size: 1.8em;
  }
`;

export default MenuOptions;
