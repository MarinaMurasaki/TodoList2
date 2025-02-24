import "./styles.css";
import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    "Learn React",
    "Write Code",
    "Build Projet",
  ]);

  const addTodo = () => {
    setTodos([...todos, "New Task"]);
  };

  return (
    <div>
      <h1>TODO List</h1>
      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>
      <button onClick={addTodo}>Add New Task</button>
    </div>
  );
};

export default App;
