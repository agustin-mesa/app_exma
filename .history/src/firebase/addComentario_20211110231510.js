import { db } from "./firebase";

const addComentario = async ({ emailUser, displayNameUser, descripcion }) => {
  db.collection("comentarios").doc(displayNameUser).set({
    email: emailUser,
    descripcion: descripcion,
  });
};

export default addComentario;
