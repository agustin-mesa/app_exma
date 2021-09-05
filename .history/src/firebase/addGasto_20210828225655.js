import { db } from "./firebase";

const addGasto = async ({
  fecha,
  categoria,
  descripcion,
  precio,
  emailUser,
}) => {
  db.collection("users").doc(`${emailUser}`).collection("gastos").add({
    fecha: fecha,
    categoria: categoria,
    descripcion: descripcion,
    precio: precio,
  });
};

export default addGasto;
