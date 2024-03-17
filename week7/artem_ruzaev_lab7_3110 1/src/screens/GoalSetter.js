import React from "react";

const GoalSetter = ({ goal, setGoal }) => {
  const handleChange = (event) => {
    setGoal(event.target.value);
  };

  return (
    <div>
      <label htmlFor="goal">Fitness Goal (hours): </label>
      <input type="number" id="goal" value={goal} onChange={handleChange} />
    </div>
  );
};

export default GoalSetter;
