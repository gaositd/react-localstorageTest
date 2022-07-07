import React, { useState, useEffect } from "react";
import "./App.css";
import { TaskCreator } from "./components/taskCreator";

function App() {
  const [taskItem, setTaskItem] = useState([]);

  function createNewTask(taskName) {
    const encontrado = taskItem.find(item => item.name === taskName);

    if(encontrado){
      alert("dato insertado anteriormente");
    }else {
      setTaskItem([...taskItem, { name: taskName, done: false }]);
    }
  };

  useEffect(()=>{
    let data = localStorage.getItem('task');
    if(data){
      console.log(`data ==>> ${JSON.parse(data)}`);
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem('task', JSON.stringify(taskItem));
  },[taskItem]);

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {taskItem.map((task) => (
            <tr key={task.name}>
              <td>{task.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
