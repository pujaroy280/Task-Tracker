import React, { useState } from 'react';

// AddTask component takes a function onAdd as a prop
const AddTask = ({ onAdd }) => {
  const [newTask, setNewTask] = useState(''); // State for storing the new task input

  // Function to handle input change in the text field
  const handleInputChange = (event) => {
    setNewTask(event.target.value); // Update newTask state with the input value
  };

  // Function to handle adding a new task
  const handleAddTask = () => {
    onAdd(newTask); // Call the onAdd function with the newTask as an argument
    setNewTask(''); // Reset the newTask state to an empty string to input new task
  };

  return (
    <div>
      <input type="text" value={newTask} onChange={handleInputChange} /> {/* Input field for entering new task */}
      <button onClick={handleAddTask}>Add Task</button> {/* Button to add the task */}
    </div>
  );
};

export default AddTask; // Export the AddTask component
