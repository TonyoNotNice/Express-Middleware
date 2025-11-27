import React, { useState } from "react";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editTask, setEditTask] = useState("");
  const [editIndex, setEditIndex] = useState(null); // Track task being edited

  // Add Task
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask(""); // Reset input field after adding task
    }
  };

  // Edit Task
  const editTaskHandler = (index) => {
    setEditTask(tasks[index].text);
    setEditIndex(index); // Set the task being edited
  };

  const saveEditedTask = () => {
    if (editTask.trim()) {
      const updatedTasks = tasks.map((task, index) =>
        index === editIndex ? { ...task, text: editTask } : task
      );
      setTasks(updatedTasks);
      setEditTask(""); // Clear the edit field
      setEditIndex(null); // Reset the task being edited
    }
  };

  // Remove Task
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Toggle Task Completion
  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Your To-Do List</h3>

      {/* Task input */}
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>

      {/* Display the list of tasks */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            <span onClick={() => toggleTaskCompletion(index)} style={{ cursor: "pointer" }}>
              {task.text}
            </span>
            <button onClick={() => editTaskHandler(index)}>Edit</button>
            <button onClick={() => removeTask(index)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Edit Task */}
      {editIndex !== null && (
        <div>
          <h3>Edit Task</h3>
          <input
            type="text"
            value={editTask}
            onChange={(e) => setEditTask(e.target.value)}
            placeholder="Edit task"
          />
          <button onClick={saveEditedTask}>Save</button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
