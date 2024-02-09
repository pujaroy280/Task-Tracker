import React, { useState } from 'react';
import DisplayTasks from './components/DisplayTasks'; // Import DisplayTasks component
import AddTask from './components/AddTask'; // Import AddTask component
import Footer from './components/Footer'; // Import Footer component
import './App.css'; // Import CSS file for styling

const App = () => {
  const [tasks, setTasks] = useState([]); // State for storing tasks

  // Function to add a new task to the list
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]); // Add new task to the tasks array
  };

  return (
    <div className="app-container"> {/* Container for the entire app */}
      <h1>Task Tracker</h1> {/* Main heading */}
      <AddTask onAdd={handleAddTask} /> {/* AddTask component for adding new tasks */}
      <DisplayTasks tasks={tasks} /> {/* DisplayTasks component for displaying tasks */}
      <Footer /> {/* Footer component */}
    </div>
  );
};

export default App; // Export the App component
