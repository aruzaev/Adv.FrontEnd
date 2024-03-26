import React from "react";

const Animals = (props) => {
  return (
    <div>
      <h3>Animals - {props.children}</h3>
    </div>
  );
};

export default Animals;
