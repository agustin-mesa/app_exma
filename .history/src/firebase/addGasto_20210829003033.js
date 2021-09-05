import { db } from "./firebase";

const addGasto = async ({
  fecha,
  categoria,
  descripcion,
  precio,
  emailUser,
  id,
}) => {
  db.collection(emailUser).doc(descripcion).set({
    fecha: fecha,
    categoria: categoria,
    descripcion: descripcion,
    precio: precio,
    id: id,
  });
};

export default addGasto;
