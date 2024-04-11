import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState(["Eat", "Shower", "Sleep"]);
  const [text, setText] = useState("");

  const handleClick = (event) => {
    setText(event.target.value);
  };

  const addTask = () => {
    setTasks([...tasks, text]);
    setText("");
  };

  return (
    <div className="todo-list">
      <h1>Renee's To-Do</h1>
      <div>
        <input
          type="text"
          placeholder="New task"
          value={text}
          onChange={handleClick}
        />
        <button className="add-button" onClick={addTask}>
          Add to list
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <label>
              <input type="checkbox" className="text" />
              {task}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
