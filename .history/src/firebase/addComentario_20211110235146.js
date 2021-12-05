import { db } from "./firebase";

const addComentario = async ({ emailUser, displayNameUser, mensaje }) => {
  db.collection("COMENTARIOS").doc(displayNameUser).add({
    email: emailUser,
    mensaje: mensaje,
  });
};

export default addComentario;
