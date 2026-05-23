import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./Taskslice";
import "./App.css";

function App() {
  //used for the input field text
  const [inputText, setInputText] = useState("");

  // para mag send actions to the Redux store
  const dispatch = useDispatch();

  // useSelector reads the task list from the Redux store
  const taskList = useSelector((state) => state.tasks.taskList);

  // Runs when the user clicks "Add Task"
  function handleAddTask() {
    // Don't add if the input is empty
    if (inputText.trim() === "") {
      alert("Please type a task before adding!");
      return;
    }

    // Send the task to Redux
    dispatch(addTask(inputText));

    // Clear the input field
    setInputText("");
  }

  // Allow pressing Enter to add a task
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleAddTask();
    }
  }

  return (
    <div className="app-container">
      <div className="task-card">
        <h1 className="app-title">TASK MANAGER</h1>
        <p className="app-subtitle">Stay on top of your day</p>

       
        <div className="input-row">
          <input
            type="text"
            className="task-input"
            placeholder="What do you need to do?"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="add-button" onClick={handleAddTask}>
            Add Task
          </button>
        </div>

        
        <p className="task-count">
          {taskList.length === 0
            ? "No tasks yet. Add one above!"
            : `You have ${taskList.length} task${taskList.length > 1 ? "s" : ""}`}
        </p>

       
        <ul className="task-list">
          {taskList.map((task, index) => (
            <li key={index} className="task-item">
              <span className="task-number">{index + 1}</span>
              <span className="task-text">{task}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;