import { db } from "./firebase";

const addGasto = () => {
  db.collection("gastos").add({
    fecha: "",
    categoria: "",
    descrip: "",
    precio: 100,
  });
};

export default addGasto;
