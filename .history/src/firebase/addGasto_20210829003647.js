import { db } from "./firebase";

const addGasto = async ({
  fecha,
  categoria,
  descripcion,
  precio,
  emailUser,
  idGasto,
}) => {
  db.collection(emailUser).doc(descripcion).set({
    fecha: fecha,
    categoria: categoria,
    descripcion: descripcion,
    precio: precio,
    idGasto: idGasto,
  });
};

export default addGasto;
