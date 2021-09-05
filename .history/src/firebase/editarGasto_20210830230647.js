import { db } from "./firebase";

const editarGasto = async ({
  fecha,
  categoria,
  descripcion,
  precio,
  idCategoria
  idGasto,
  emailUser,
}) => {
  db.collection(emailUser)
    .doc(idGasto)
    .update({
      fecha: fecha,
      categoria: categoria,
      idCategoria:idCategoria,
      descripcion: descripcion,
      precio: Number(precio),
    });
};

export default editarGasto;
