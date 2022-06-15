import React from "react";
import { useParams } from "react-router-dom";

function Param() {
  const { id } = useParams();

  return (
    <div>
      <h1>Param teste</h1>
      <p>Parametro ?</p>
    </div>
  );
}

export default Param;
