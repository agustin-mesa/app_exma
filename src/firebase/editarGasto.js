import { db } from "./firebase";

const editarGasto = async ({
  fecha,
  categoria,
  descripcion,
  precio,
  emailUser,
  idGasto,
}) => {
  db.collection(emailUser)
    .doc(idGasto)
    .update({
      fecha: fecha,
      categoria: categoria,
      descripcion: descripcion,
      precio: Number(precio),
    });
};

export default editarGasto;
