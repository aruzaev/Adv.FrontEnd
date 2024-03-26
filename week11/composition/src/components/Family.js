import React from "react";

const Family = (props) => {
  return (
    <div>
      <h3>Family - {props.title} </h3>
      {props.children}
    </div>
  );
};

export default Family;
