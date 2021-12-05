import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

//---------------- STYLES ----------------
import { Input } from "../components/elements/StyledElements";
//---------------- CONTEXT ----------------
import { useAuth } from "../context/AuthContext";
//---------------- COMPONENTS ----------------
import BtnRegresar from "../components/BtnRegresar";
import Perfil from "../components/Perfil";
import InputPassword from "../components/InputPassword";
import MsgAlert from "../components/MsgAlert";
import LoadSpinner from "../components/LoadSpinner";
//---------------- FIREBASE ----------------
import { storage } from "../firebase/firebase";

const Configuracion = () => {
  const { user } = useAuth();

  const [showInput, changeShowInput] = useState("");

  const [inputNuevoNombre, changeNuevoNombre] = useState("");
  const [inputCorreoAnterior, changeCorreoAnterior] = useState("");
  const [inputCorreoNuevo, changeCorreoNuevo] = useState("");
  const [inputNewPass, changeInputNewPass] = useState("");
  const [inputNewPassRepite, changeInputNewPassRepite] = useState("");

  // Loading al cambiar la foto de perfil
  const [loading, changeLoading] = useState(false);

  // Mostrar advertencia si desea eliminar su cuenta
  const [inputDeleteAcc, changeInputDeleteAcc] = useState("");
  const [warning, changeWarning] = useState(false);
  const [btnDisable, changeBtnDisable] = useState(true);

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

  const handleChange = (e) => {
    let inputName = e.target.name;
    switch (inputName) {
      case "nuevoNombre":
        // Máximo de caracteres para el nombre del gasto: -> 30 <-
        if (inputNuevoNombre.length < 20) {
          changeNuevoNombre(e.target.value);
        } else {
          changeNuevoNombre(e.target.value.slice(0, 20));
          mostrarAlerta(true, "error", "Máximo caracteres alcanzado (20/20)");
        }
        break;
      case "emailAnterior":
        changeCorreoAnterior(e.target.value);
        break;
      case "emailNuevo":
        changeCorreoNuevo(e.target.value);
        break;
      case "password":
        changeInputNewPass(e.target.value);
        break;
      case "repetirPassword":
        changeInputNewPassRepite(e.target.value);
        break;
      case "eliminarCuenta":
        changeInputDeleteAcc(e.target.value);
        console.log(e.target.value);
        if (inputDeleteAcc.toLowerCase() === "eliminar mi cuenta") {
          changeBtnDisable(false);
        } else {
          changeBtnDisable(true);
        }
        break;
      default:
        break;
    }
  };

  const handleInputChange = (e) => {
    let inputAEditar = e.target.name;
    switch (inputAEditar) {
      case "btnEditarNombre":
        changeShowInput(inputAEditar);
        break;
      case "btnEditarEmail":
        changeShowInput(inputAEditar);
        break;
      case "btnEditarPass":
        changeShowInput(inputAEditar);
        break;
      case "btnUploadProfileImg":
        changeShowInput(inputAEditar);
        break;
      default:
        break;
    }
  };

  const updateNombre = () => {
    if (inputNuevoNombre !== "") {
      user
        .updateProfile({
          displayName: inputNuevoNombre,
        })
        .then(() => {
          mostrarAlerta(true, "exito", "¡Nombre cambiado exitosamente!");
          changeNuevoNombre("");
        })
        .catch(() => {
          mostrarAlerta(
            true,
            "error",
            "Ocurrió un error al intentar cambiar su nombre. Inténtelo más tarde"
          );
        });
    } else {
      mostrarAlerta(true, "error", "Está vacío...");
    }
  };

  const updateEmail = () => {
    // Se comprueba que estén los datos llenos
    if (inputCorreoAnterior === "" || inputCorreoNuevo === "") {
      mostrarAlerta(true, "error", "Por favor, llene ambos campos.");
      return;
    }

    if (inputCorreoAnterior === user.email) {
      // Se comprueba que el correo ingresado sea válido
      const regexEmail = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
      if (
        !regexEmail.test(inputCorreoAnterior) &&
        !regexEmail.test(inputCorreoNuevo)
      ) {
        mostrarAlerta(
          true,
          "error",
          "Por favor, ingrese un correo electrónico válido."
        );
        return;
      }

      user
        .updateEmail(inputCorreoNuevo)
        .then(() => {
          mostrarAlerta(true, "exito", "¡Correo cambiado exitosamente!");
          changeCorreoAnterior("");
          changeCorreoNuevo("");
        })
        .catch((error) => {
          let msg;
          switch (error.code) {
            case "auth/email-already-in-use":
              msg = "El correo ingresado ya está en uso.";
              break;
          }
          mostrarAlerta(true, "error", msg);
        });
    } else {
      mostrarAlerta(true, "error", "El correo anterior no coincide.");
      return;
    }
  };

  const updatePassword = () => {
    // Se comprueba que las contraseñas sean iguales
    if (inputNewPass !== inputNewPassRepite) {
      mostrarAlerta(true, "error", "Las contraseñas no son iguales.");
      return;
    }
    if (inputNewPass === "" || inputNewPassRepite === "") {
      mostrarAlerta(true, "error", "Por favor, llene todos los datos.");
      return;
    }
    const regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    if (
      !regexPassword.test(inputNewPass) &&
      !regexPassword.test(inputNewPassRepite)
    ) {
      mostrarAlerta(
        true,
        "error",
        "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, una minúscula y otra mayúscula. NO puede tener símbolos"
      );

      return;
    }
    user
      .updatePassword(inputNewPass)
      .then(() => {
        mostrarAlerta(true, "exito", "¡Contraseña cambiada exitosamente!");
        changeInputNewPass("");
        changeInputNewPassRepite("");
      })
      .catch((error) => {
        console.log(error.code);
        mostrarAlerta(
          true,
          "error",
          "Ocurrió un error al intentar cambiar la contraseña."
        );
      });
  };

  const uploadProfileImg = (e) => {
    changeLoading(true);

    let file = e.target.files[0];

    if (file) {
      let storageRef = storage.ref("/userProfileImage/" + file.name);
      let uploadTask = storageRef.put(file);

      uploadTask.on(
        "state__changed",
        (snapshot) => {},
        (error) => {
          mostrarAlerta(
            true,
            "error",
            "Ocurrió un error al intentar cambiar su foto de perfil."
          );
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            user.updateProfile({ photoURL: downloadURL });
          });

          changeLoading(false);
          mostrarAlerta(
            true,
            "exito",
            "¡Foto de perfil cambiada exitosamente!"
          );
          return;
        }
      );
    } else {
      changeLoading(false);
    }
  };

  const eliminarCuenta = () => {};

  return (
    <>
      <BtnRegresar className="margin" titulo="Configuración" />
      <ContainerSettings>
        <Perfil />
        <ListOptions>
          <li>
            <span>Foto de perfil</span>
            <span></span>
            {showInput !== "btnUploadProfileImg" ? (
              <button
                className="btn-editar"
                name="btnUploadProfileImg"
                onClick={(e) => handleInputChange(e)}
              >
                Editar
              </button>
            ) : (
              <i
                className="fas fa-times"
                onClick={() => changeShowInput("")}
              ></i>
            )}
          </li>
          {showInput === "btnUploadProfileImg" && (
            <div>
              <label htmlFor="file-upload" className="custom-file-upload">
                <i className="fa fa-cloud-upload"></i> Subir foto
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/x-png,image/jpeg,image/jpg"
                onChange={uploadProfileImg}
              />
            </div>
          )}

          <li>
            <span>Nombre</span>
            <span>{user.displayName}</span>
            {showInput !== "btnEditarNombre" ? (
              <button
                className="btn-editar"
                name="btnEditarNombre"
                onClick={(e) => handleInputChange(e)}
              >
                Editar
              </button>
            ) : (
              <i
                className="fas fa-times"
                onClick={() => changeShowInput("")}
              ></i>
            )}
          </li>
          {showInput === "btnEditarNombre" && (
            <div>
              <Input
                type="text"
                name="nuevoNombre"
                placeholder="Nuevo nombre"
                value={inputNuevoNombre}
                onChange={handleChange}
                autoComplete="off"
              />
              <button className="btn-editar" onClick={() => updateNombre()}>
                Editar
              </button>
            </div>
          )}

          <li>
            <span>Email</span>
            <span>{user.email}</span>
            {user.providerData[0].providerId === "password" ? (
              <>
                {showInput !== "btnEditarEmail" ? (
                  <button
                    className="btn-editar"
                    name="btnEditarEmail"
                    onClick={(e) => handleInputChange(e)}
                  >
                    Editar
                  </button>
                ) : (
                  <i
                    className="fas fa-times"
                    onClick={() => changeShowInput("")}
                  ></i>
                )}
              </>
            ) : user.providerData[0].providerId === "google.com" ? (
              <i className="fab fa-google"></i>
            ) : (
              <i className="fab fa-facebook-f"></i>
            )}
          </li>
          {showInput === "btnEditarEmail" && (
            <div>
              <Input
                type="text"
                name="emailAnterior"
                placeholder="Correo electrónico anterior"
                value={inputCorreoAnterior}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="emailNuevo"
                placeholder="Nuevo correo electrónico"
                value={inputCorreoNuevo}
                onChange={handleChange}
              />
              <button className="btn-editar" onClick={() => updateEmail()}>
                Editar
              </button>
            </div>
          )}

          {user.providerData[0].providerId === "password" && (
            <>
              <li>
                <span>Contraseña</span>
                <span>*********</span>
                {showInput !== "btnEditarPass" ? (
                  <button
                    className="btn-editar"
                    name="btnEditarPass"
                    onClick={(e) => handleInputChange(e)}
                  >
                    Editar
                  </button>
                ) : (
                  <i
                    className="fas fa-times"
                    onClick={() => changeShowInput("")}
                  ></i>
                )}
              </li>
            </>
          )}
          {showInput === "btnEditarPass" && (
            <div>
              <InputPassword
                name="password"
                placeholder="Nueva contraseña"
                password={inputNewPass}
                changePassword={changeInputNewPass}
              />
              <InputPassword
                name="repetirPassword"
                placeholder="Repetir nueva contraseña"
                password={inputNewPassRepite}
                changePassword={changeInputNewPassRepite}
              />
              <button className="btn-editar" onClick={() => updatePassword()}>
                Editar
              </button>
            </div>
          )}
          <li>
            <button
              className="btn-editar"
              onClick={() => changeWarning(!warning)}
            >
              Eliminar mi cuenta
            </button>
            {warning && (
              <div className="warning">
                <div>
                  <p>
                    Esta acción no se puede deshacer. Esto eliminará
                    permanentemente tu cuenta.
                    <br />
                    <br />
                    Escriba <b>eliminar mi cuenta</b> para confirmar.
                  </p>
                  <Input
                    type="text"
                    name="eliminarCuenta"
                    placeholder="Confirme acá..."
                    onChange={(e) => handleChange(e)}
                  />
                  <button className="btn-editar" disabled={btnDisable}>
                    Hasta pronto... :(
                  </button>
                </div>
              </div>
            )}
          </li>
        </ListOptions>
      </ContainerSettings>
      <MsgAlert
        classAlert={alert.classAlert}
        msg={alert.msg}
        alertState={alertState}
        changeAlertState={changeAlertState}
      />
      {loading && <LoadSpinner />}
    </>
  );
};

const slideDown = keyframes`
    0%{
      opacity:0;
    }
    100%{
      opacity:1;
    }
`;

const ContainerSettings = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListOptions = styled.ul`
  list-style: none;
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
    border-radius: 15px;
    transition: all 0.2s ease;
  }
  li span {
    color: var(--text__01);
    font-size: 14px;
    font-weight: 700;
    text-align: left;
    width: 120px;
  }
  li span:nth-child(2) {
    font-size: 12px;
    font-weight: 500;
    flex: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 15px 0 0;
    color: var(--text__05);
  }
  button.btn-editar {
    color: var(--text__03);
    font-size: 14px;
    font-weight: 700;
    text-align: left;
    background: transparent;
    border: none;
    cursor: pointer;
  }
  i {
    font-size: 1em;
    color: var(--text__01);
  }
  div {
    padding: 0 20px 15px;
    border-bottom: 1px solid var(--border__03);
  }
  div.pass {
    padding: 0;
    border: none;
  }
  input[type="file"] {
    display: none;
  }
  .custom-file-upload {
    border: 1px solid var(--border__02);
    border-radius: 50px;
    color: var(--text__01);
    font-weight: 600;
    display: inline-block;
    padding: 6px 12px;
  }

  .warning {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${slideDown} 0.5s ease forwards;
    background: var(--bg__11);
    z-index: 999;
  }
  .warning div {
    background: var(--bg__14);
    box-shadow: 0px 15px 20px var(--shadow__01);
    padding: 10px 15px;
    animation: ${slideDown} 0.3s ease forwards;
    user-select: none;
    border: 1px solid var(--border__03);
    border-radius: 15px;
  }
  .warning p {
    font-weight: 500;
    line-height: 22px;
    font-size: 0.9em;
    color: var(--text__01);
  }
  .warning p b {
    color: var(--text__03);
  }
  .warning button {
    margin: 10px 0;
    background: var(--bg__01);
    padding: 10px;
    border-radius: 50px;
    text-align: center;
    width: 100%;
  }
  .warning button:disabled {
    opacity: 0.5;
  }
`;

export default Configuracion;
