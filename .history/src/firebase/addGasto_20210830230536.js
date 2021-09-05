import { db } from "./firebase";

const addGasto = async ({
  fecha,
  categoria,
  descripcion,
  precio,
  idGasto,
  idCategoria,
  emailUser,
}) => {
  db.collection(emailUser)
    .doc(idGasto)
    .set({
      fecha: fecha,
      categoria: categoria,
      descripcion: descripcion,
      precio: Number(precio),
      idGasto: idGasto,
      idCategoria: idCategoria,
    });
};

export default addGasto;
