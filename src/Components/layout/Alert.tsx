import React from "react";

function Alert({
  type,
  msg,
}: {
  type?: "primary" | "light" | "dark" | "danger" | "success";
  msg?: string;
}) {
  if (!type || !msg) {
    return null;
  }

  return (
    <div className={`alert alert-${type}`}>
      <i className="fas fa-info-circle"></i> {msg}
    </div>
  );
}

export default Alert;
