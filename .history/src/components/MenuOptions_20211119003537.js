import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
//---------------- COMPONENTS ----------------
import OptionMenu from "./OptionMenu";
import MsgAlert from "./MsgAlert";
import PhotoPerfil from "./PhotoPerfil";
//---------------- CONTEXT ----------------
import { useAuth } from "../context/AuthContext";
//---------------- FIREBASE ----------------
import { auth } from "../firebase/firebase";
//---------------- STYLES ----------------
import { slideDown } from "./elements/StyledElements";

const MenuOptions = () => {
  const { user } = useAuth();
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

  const handleMenuOnClick = async () =>
    await setTimeout(() => changeShowMenu(!showMenu), 50);
  const handleMenuOnBlur = () => setTimeout(() => changeShowMenu(false), 50);

  return (
    <>
      <div tabIndex="2" onBlur={handleMenuOnBlur} onClick={handleMenuOnClick}>
        {user ? (
          <PhotoPerfil
            src={user.photoURL ? user.photoURL : ""}
            alt={user.displayName}
            className=""
            icono={!user.photoURL && "far fa-user"}
          />
        ) : (
          ""
        )}
      </div>
      {showMenu && (
        <ContainerMenuOptions>
          {user ? (
            user.photoURL ? (
              <OptionMenu
                icono="far fa-user"
                currentUser={user}
                src={user.photoURL}
                alt={user.displayName}
                userCheck={user.emailVerified}
                opcion={user.displayName}
                texto="Ver tu perfil"
                toLink="/mi-perfil"
              />
            ) : (
              <OptionMenu
                icono="far fa-user"
                currentUser={user}
                src=""
                userCheck={user.emailVerified}
                opcion={user.displayName}
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
            withIcon={true}
          />
          <hr />
          <OptionMenu
            icono="fas fa-cog"
            src=""
            opcion="Configuración"
            texto=""
            toLink="/configuracion"
            withIcon={true}
          />
          <OptionMenu
            icono="fas fa-moon"
            src=""
            opcion="Pantalla y accesibilidad"
            texto=""
            toLink="/pantalla-accesibilidad"
            withIcon={true}
          />
          <OptionMenu
            icono="fas fa-sign-out-alt"
            opcion="Cerrar sesión"
            src=""
            texto=""
            funcion={signOut}
            toLink="/login"
            withIcon={true}
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
  border-radius: 15px;
  top: 50px;
  right: 20px;
  left: 20px;
  background: var(--bg__14);
  box-shadow: 0px 15px 20px var(--shadow__01);
  padding: 10px;
  animation: ${slideDown} 0.3s ease forwards;
  user-select: none;
  border: 1px solid var(--border__03);

  hr {
    margin: 5px 0;
    background: var(--border__04);
    border: 1px solid var(--border__04);
  }
  a {
    color: var(--text__01);
  }
`;

export default MenuOptions;
