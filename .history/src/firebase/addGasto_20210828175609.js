import { db } from "./firebase";

const addGasto = async ({ fecha, categoria, descripcion, precio, uidUser }) => {
  db.collection("users").doc(uidUser).add({
    fecha: fecha,
    categoria: categoria,
    descripcion: descripcion,
    precio: precio,
  });
};

export default addGasto;
