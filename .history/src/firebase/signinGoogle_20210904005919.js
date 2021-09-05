import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

const auth = getAuth();
const signIn = signInWithPopup(auth, provider)
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

const signInRedirect = signInWithRedirect(auth, provider);

const getRedirect = getRedirectResult(auth)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    const user = result.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

const sOut = signOut(auth)
  .then(() => {
    // Sign-out successful.
  })
  .catch((error) => {
    // An error happened.
  });

const isUserEqual = (googleUser, firebaseUser) => {
  if (firebaseUser) {
    const providerData = firebaseUser.providerData;
    for (let i = 0; i < providerData.length; i++) {
      if (
        providerData[i].providerId === GoogleAuthProvider.PROVIDER_ID &&
        providerData[i].uid === googleUser.getBasicProfile().getId()
      ) {
        // We don't need to reauth the Firebase connection.
        return true;
      }
    }
  }
  return false;
};

export { signIn, signInRedirect, getRedirect, sOut, isUserEqual };
