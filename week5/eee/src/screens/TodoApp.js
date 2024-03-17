import React, { useState } from "react";

const ToDoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const onAddTaskClick = () => {
    if (inputVal.length > 0 && inputVal.trim()) {
      const newToDo = { text: inputVal, completed: false };
      //use ...arrayName to represent existing array
      setTodos([...todos, newToDo]);
    }
  };

  const onTaskInputChange = (event) => {
    setInputVal(event.target.value);
  };

  const completeTask = () => {

  }

  return (
    <div>
      <h1>To Do List</h1>
      <p>Enter your task:</p>
      <input
        type="text"
        placeholder="Enter task"
        value={inputVal}
        onChange={onTaskInputChange}
      />
      <button onClick={onAddTaskClick}> Add task</button>
      <ul>
        {todos.map((task) => (
          <ToDoItem 
          todo={task}
          todoComplete />
        ))}
      </ul>
    </div>
  );
};

const ToDoItem = ({todo}) => {
  return (
    <li>
      <span onClick={completeTask}>{todo.text}</span>
    </li>
  );
};

export default ToDoApp;
