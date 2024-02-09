# Task Tracker React App

## Objective
The purpose of this app is to develop a Task Tracker application using React to demonstrate proficiency in creating components, using props and states, and handling events.

## Project Setup
- Create a new React project for the Task Tracker. 
- Run the following commands:

```
npm create vite@latest
```

1) project name: task-tracker
2) Select a framework: React
3) Select a variant: JavaScript

```
cd task-tracker
npm install
```

- Remove unnecessary files and folders.
- Remove starter code in App.jsx.
- Create at least 3 components in separate files:
1. Component for displaying tasks: `DisplayTasks`
2. Component for adding a new task: `AddTask`
3. Component for the footer with any additional information or links: `Footer`
- Import the 3 components into `App.jsx` and render them there.

## Notes
- The `App` component maintains a state `tasks` using the `useState` hook to keep track of the list of tasks.
- `DisplayTasks` takes in `tasks` as props and displays them on the page.
- `AddTask` handles the event of the user adding a new task. You could use a button with `onClick` or another type of event.
- `AddTask` maintains a state `newTask`.

## About
This is a simple Task Tracker application built using React. It allows users to add and display tasks.

## Technologies
- React
- JavaScript
- HTML
- CSS
- Vite
- Node.js

## Getting Started
To get a local copy up and running follow these simple steps:

### Installation
1. Clone the repo
 ```sh
 git clone https://github.com/your_username_/task-tracker.git
```
Install Node Package Manager to obtain node modules
```
npm install
```
Start the Server
```
npm run dev
```




