import { useState, useEffect  } from "react";
import { TaskCreator } from "./components/taskCreator";
import "./App.css";

function App() {

  const [taskItems, setTaskItems] = useState([]);

  function createNewTask(taskName) {
    if(taskItems.find((taskItem) => taskItem.name === taskName)) {
      alert("Tarea añadida anteriormente");
    }else {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  }

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if(data){
      setTaskItems(JSON.parse(data));
    }
  },[ ]);

  useEffect(() =>{
    localStorage.setItem('tasks',JSON.stringify(taskItems));
  },[taskItems]);


  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />
      <table align="center" border="3">
        <thead>
          <tr>
            <td>
              <h3>&nbsp;Task Name&nbsp;</h3>
            </td>
            <td>
              <h3>&nbsp;Complete?&nbsp;</h3>
            </td>
          </tr>
        </thead>
        <tbody>
          {taskItems.map((item) => (
            <tr key={item.name}>
              <td>
                <h4>{item.name}</h4>
              </td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
