import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
//---------------- FIREBASE ----------------
import { db } from "../firebase/firebase";
//---------------- CONTEXT ----------------
import { useAuth } from "../context/AuthContext";

const useGetGasto = (id) => {
  const { user } = useAuth();
  const history = useHistory();
  const [gasto, changeGasto] = useState("");

  useEffect(() => {
    db.collection(user.email)
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) changeGasto(doc);
        else history.push("/gestion/mi-lista");
      });
  }, [history, id, user.email]);

  return [gasto];
};

export default useGetGasto;
