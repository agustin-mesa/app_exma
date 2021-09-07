import React from "react";
import { db } from "./firebase";
import { useAuth } from "../context/AuthContext";

const borrarGasto = (id) => {
  const { user } = useAuth();
  db.collection(user.email).doc(id).delete();
};

export default borrarGasto;
