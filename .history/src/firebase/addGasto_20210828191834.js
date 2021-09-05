import { db } from "./firebase";

const addGasto = async ({
  fecha,
  categoria,
  descripcion,
  precio,
  emailUser,
}) => {
  db.collection(emailUser).doc(descripcion).add({
    fecha: fecha,
    categoria: categoria,
    descripcion: descripcion,
    precio: precio,
  });
};

export default addGasto;
