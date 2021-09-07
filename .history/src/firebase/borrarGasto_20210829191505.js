import { db } from "./firebase";

const borrarGasto = (id, userEmail) => {
  console.log("BORRADO");
  db.collection(userEmail).doc(id).delete();
};

export default borrarGasto;
