import React, { useState } from "react";
import MsgAlert from "../components/MsgAlert";
import { db } from "./firebase";

const borrarGasto = (id, userEmail) => {
  const [alertState, changeAlertState] = useState(false);
  const [alert, changeAlert] = useState({});
  db.collection(userEmail).doc(id).delete();
  return (
    <MsgAlert
      classAlert={alert.classAlert}
      msg={alert.msg}
      alertState={alertState}
      changeAlertState={changeAlertState}
    />
  );
};

export default borrarGasto;
