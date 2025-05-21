import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updateTasks = tasks.filter((_, i) => i !== index);
    setTasks(updateTasks);
  }

  function MoveTaskUp(index) {
    if (index > 0) {
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index - 1]] =
        [updateTasks[index - 1], updateTasks[index]];
      setTasks(updateTasks);
    }
  }

  function MoveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index + 1]] =
        [updateTasks[index + 1], updateTasks[index]];
      setTasks(updateTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a Task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((taskItem, index) => (
          <li key={index}>
            <span className="text">{taskItem}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => MoveTaskUp(index)}>
              UP
            </button>
            <button className="move-button" onClick={() => MoveTaskDown(index)}>
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
