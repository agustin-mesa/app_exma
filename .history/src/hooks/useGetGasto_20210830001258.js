import { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";

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
      });
  }, [history, id]);

  return [gasto];
};

export default useGetGasto;
