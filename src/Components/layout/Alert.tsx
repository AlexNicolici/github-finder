import React, { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

function Alert() {
  const alertContext: any = useContext(AlertContext);

  const { alert } = alertContext;

  if ((!alert && !alert?.type) || !alert?.msg) {
    return null;
  }

  return (
    <div className={`alert alert-${alert.type}`}>
      <i className="fas fa-info-circle"></i> {alert.msg}
    </div>
  );
}

export default Alert;
