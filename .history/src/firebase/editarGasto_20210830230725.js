import { db } from "./firebase";

const editarGasto = async ({
  fecha,
  categoria,
  idCategoria
  descripcion,
  precio,
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
