import React, { useState, useEffect } from "react";
import { TaskCreator } from "./components/taskCreator";
import "./App.css";
import { Tasktable } from "./components/tasktable";

function App() {
  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  function createNewTask(taskName) {
    if (taskItems.find((taskItem) => taskItem.name === taskName)) {
      alert("Tarea añadida anteriormente");
    } else {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  }

  function toggleTask(task) {
    setTaskItems(
      taskItems.map((item) =>
        item.name === task.name ? { ...item, done: !item.done } : item
      )
    );
  }

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);
  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />
      <Tasktable tasks={taskItems} toggleTask={toggleTask} />
      <div>
        <br />
        <label htmlFor="show">
          Show Task Done Table
          <input
            type="checkbox"
            id="show"
            name="show"
            onChange={(e) => setShowCompleted(!showCompleted)}
          />
        </label>
        <br />
        <br />
      </div>
      {showCompleted === true && (
        <Tasktable
          tasks={taskItems}
          toggleTask={toggleTask}
          showCompleted={showCompleted}
        />
      )}
    </div>
  );
}

export default App;
