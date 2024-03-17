import React, { useState } from "react";
import ExerciseForm from "./ExersizeForm";
import ExerciseList from "./ExerciseList";
import GoalSetter from "./GoalSetter";

const FitnessTracker = () => {
  const [exercises, setExercises] = useState([]);
  const [newExercise, setNewExercise] = useState({ name: "", duration: 0 });
  const [goal, setGoal] = useState(7); // 7 hours per week

  const logExercise = (exercise) => {
    setExercises([...exercises, exercise]);
  };

  const updateGoal = (newGoal) => {
    setGoal(newGoal);
  };

  const deleteExercise = (indexToDelete) => {
    setExercises(exercises.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="FitnessTracker">
      <h1>Fitness Tracker</h1>
      <h2>Artem Ruzaev (n01497403)</h2>
      <GoalSetter goal={goal} setGoal={setGoal} />
      <ExerciseForm
        newExercise={newExercise}
        setNewExercise={setNewExercise}
        logExercise={logExercise}
      />
      <ExerciseList exercises={exercises} deleteExercise={deleteExercise} />
    </div>
  );
};

export default FitnessTracker;
