import React, { useState, useEffect } from "react";
import "./App.css";
import { TaskCreator } from "./components/taskCreator";

function App() {
  const [taskItem, setTaskItem] = useState([
    // {
    //   name: "Tarea 1",
    //   done: false,
    // },
    // {
    //   name: "Tarea 2",
    //   done: false,
    // },
    // {
    //   name: "Tarea 3",
    //   done: false,
    // },
  ]);

  function createNewTask(taskName) {
    // alert(taskName);
    const encontrado = taskItem.find(item => item.name === taskName);

    if(encontrado){
      alert("dato insertado anteriormente");
    }else {
      setTaskItem([...taskItem, { name: taskName, done: false }]);
      localStorage.setItem('task', JSON.stringify(taskItem));
    }
  };

  useEffect(()=>{
    let data = localStorage.getItem('task');
    if(data){
      console.log(JSON.parse(data));
    }
  },[]);

  useEffect(()=>{
    console.log("cambio")
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
