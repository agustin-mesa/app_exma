import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import OptionMenu from "./OptionMenu";
import MsgAlert from "./MsgAlert";
import PhotoPerfil from "./PhotoPerfil";

//---------------- FIREBASE ----------------
import { auth } from "../firebase/firebase";

import { slideDown, Photo } from "./elements/StyledElements";

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

  const handleMenuOnClick = async () =>
    await setTimeout(() => changeShowMenu(!showMenu), 50);
  const handleMenuOnBlur = () => setTimeout(() => changeShowMenu(false), 50);

  return (
    <>
      <div tabIndex="2" onBlur={handleMenuOnBlur} onClick={handleMenuOnClick}>
        {auth.currentUser ? (
          <PhotoPerfil
            src={auth.currentUser.photoURL ? auth.currentUser.photoURL : ""}
            alt={auth.currentUser.displayName}
            className=""
            icono={!auth.currentUser.photoURL && "far fa-user"}
          />
        ) : (
          ""
        )}
      </div>
      {showMenu && (
        <ContainerMenuOptions>
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
                toLink="/mi-perfil"
              />
            ) : (
              <OptionMenu
                icono="far fa-user"
                currentUser={auth.currentUser}
                src=""
                userCheck={auth.currentUser.emailVerified}
                opcion={auth.currentUser.displayName}
                texto="Ver tu perfil"
                toLink="/mi-perfil"
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
            toLink=""
          />
          <OptionMenu
            icono="fas fa-moon"
            src=""
            opcion="Pantalla y accesibilidad"
            texto=""
            toLink=""
          />
          <OptionMenu
            icono="fas fa-sign-out-alt"
            opcion="Cerrar sesión"
            src=""
            texto=""
            funcion={signOut}
            toLink="/login"
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
  border: 1px solid rgb(0 0 0 / 10%);

  hr {
    margin: 5px 0;
    background: rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  a {
    color: #444;
  }
`;

export default MenuOptions;
