import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (taskText) {
      setTasks([...tasks, taskText]);
      setTaskText('');
    }
  };
  return (
    <div className="container mt-5 ">
      <h1 className="text-center">Task Manager</h1>
      
      <div className="row justify-content-center" >
        <div className="col-6 mb-2">
        <input
          type="text"
          className="form-control  "
          placeholder="Enter task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        </div>
      </div>
      <button className="btn btn-primary d-block mx-auto" onClick={addTask}>
        Add Task
      </button>
      <div className="row justify-content-center" >
        <div className="col-6">
      <ul className="list-group mt-3">
        {tasks.map((task, index) => (
          <li key={index} className="list-group-item">
            {task}
          </li>
        ))}
      </ul>
      </div>
      </div>
    </div>
  );
  
  // return (
  //   <div className="container mt-5">
  //     <h1 className="text-center">Task Manager</h1>
  //     <div className="d-flex justify-content-center mb-3">
  //       <input
  //         type="text"
  //         className="form-control col-6"
  //         placeholder="Enter task"
  //         value={taskText}
  //         onChange={(e) => setTaskText(e.target.value)}
  //       />
  //     </div>
  //     <button className="btn btn-primary d-block mx-auto" onClick={addTask}>
  //       Add Task
  //     </button>
  //     <ul className="list-group mt-3">
  //       {tasks.map((task, index) => (
  //         <li key={index} className="list-group-item">
  //           {task}
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
}

export default App;
