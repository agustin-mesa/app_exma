import { db } from "./firebase";

const addGasto = async ({ fecha, categoria, descripcion, precio, uidUser }) => {
  db.collection("gastos").doc(uidUser).collection(descripcion).add({
    fecha: fecha,
    categoria: categoria,
    descripcion: descripcion,
    precio: precio,
  });
};

export default addGasto;
