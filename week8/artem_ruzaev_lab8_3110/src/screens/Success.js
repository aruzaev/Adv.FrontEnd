// Success.js

import React from "react";
import { useParams } from "react-router-dom";

let Success = () => {
  const { action, price } = useParams();

  return (
    <div>
      <h2>Success!</h2>
      <p>{`You have successfully completed the ${action} process.`}</p>
      {price && <p>Price: {price}</p>}
    </div>
  );
};

export default Success;
