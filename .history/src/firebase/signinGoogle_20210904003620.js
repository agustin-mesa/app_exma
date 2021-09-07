import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // Esto le da un token de acceso a Google.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // La información del usuario registrado.
    const user = result.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    //  El correo electrónico de la cuenta del usuario utilizado.
    const email = error.email;
    // El tipo de AuthCredential que se utilizó.
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
