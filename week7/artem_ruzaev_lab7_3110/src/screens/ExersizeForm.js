import React from "react";

const ExerciseForm = ({ newExercise, setNewExercise, logExercise }) => {
  const handleNameChange = (event) => {
    setNewExercise({ ...newExercise, name: event.target.value });
  };

  const handleDurationChange = (event) => {
    const duration =
      event.target.value === "" ? "" : Number(event.target.value); // if blank set as blank
    setNewExercise({ ...newExercise, duration: duration });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newExercise.name && newExercise.duration > 0) {
      logExercise(newExercise);
      setNewExercise({ name: "", duration: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newExercise.name}
        onChange={handleNameChange}
        placeholder="Exercise name"
      />
      <input
        type="number"
        value={newExercise.duration}
        onChange={handleDurationChange}
        placeholder="Duration (in minutes)"
      />
      <button type="submit">Log Exercise</button>
    </form>
  );
};

export default ExerciseForm;
