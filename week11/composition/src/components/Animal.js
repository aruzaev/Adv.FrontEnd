import React from "react";

const Animal = (props) => {
  return (
    <div>
      <h1>
        Animal - {props.animal} ({props.count})
      </h1>
    </div>
  );
};

export default Animal;
