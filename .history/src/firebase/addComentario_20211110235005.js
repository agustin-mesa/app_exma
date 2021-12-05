import { db } from "./firebase";

const addComentario = async ({ emailUser, displayNameUser, mensaje }) => {
  db.collection("COMENTARIOS").add(displayNameUser).set({
    email: emailUser,
    mensaje: mensaje,
  });
};

export default addComentario;
