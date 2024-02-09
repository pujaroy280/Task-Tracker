import React from 'react';

// DisplayTasks component takes tasks as a prop
const DisplayTasks = ({ tasks }) => {
  return ( // Heading for the task list
    <div> 
      <h2>Task List:</h2> 
      <ul>
        {tasks.map((task, index) => ( // Map through the tasks array to display each task
          <li key={index}>{task}</li> // Display each task as a list item
        ))}
      </ul>
    </div>
  );
};

// Export the DisplayTasks component
export default DisplayTasks;
