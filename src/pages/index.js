import React, { useState } from "react";
import { StaticQuery, graphql } from "gatsby";
import styles from "./styles.scss";

//todo list component
const ToDoList = () => {
  //stores state of task list
  const [tasks, setTasks] = useState([]);

  //stores state of task name input box
  const [text, setText] = useState("");

  //updates text state with input from box
  const handleClick = (event) => {
    setText(event.target.value);
    console.log(text);
  };

  //updates task list onclick
  const addTask = () => {
    console.log(tasks);

    const newTask = {
      text,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    console.log(tasks);

    setText("");
  };

  //updates complete status on check
  const handleCheck = (index) => {
    console.log("i'm doing something");
    setTasks(
      tasks.map((task, i) => {
        if (i === index) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
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
        <button className="add-button" onClick={() => addTask()}>
          Add to list
        </button>
      </div>
      <div>
        {tasks.map((task, index) => (
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                className="text"
                checked={task.completed}
                onChange={() => handleCheck(index)}
              />
              {task.text}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <StaticQuery
        query={graphql`
          query HeadingQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={(data) => (
          <header>
            <h3>{data.site.siteMetadata.title}</h3>
          </header>
        )}
      />
      <ToDoList />
    </div>
  );
};

export default App;
