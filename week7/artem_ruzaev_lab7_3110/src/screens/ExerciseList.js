import React from "react";

const ExerciseList = ({ exercises, deleteExercise }) => {
  return (
    <ul>
      {exercises.map((exercise, index) => (
        <li key={index}>
          {`${exercise.name} - ${exercise.duration} minutes`}
          <button
            onClick={() => deleteExercise(index)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ExerciseList;
