import { db } from "./firebase";

const borrarGasto = (id, userEmail) => {
  db.collection(userEmail).doc(id).delete();
};

export default borrarGasto;
