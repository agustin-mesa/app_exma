import { db } from "./firebase";

const addGasto = ({ fecha, categoria, descripcion, precio }) => {
  db.collection("gastos").add({
    fecha: fecha,
    categoria: categoria,
    descripcion: descripcion,
    precio: precio,
  });
};

export default addGasto;
