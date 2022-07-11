import React, { useState, useEffect } from "react";
import { TaskCreator } from "./components/taskCreator";
import "./App.css";
import { Tasktable } from "./components/tasktable";
import { VisibilityControl } from "./components/visibilityControl";
import { Container } from "./components/container";

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

  const handleDeleteTask = () => {
    setTaskItems(taskItems.filter((item) => !item.done));
    setShowCompleted(false);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);
  return (
    <main className="bg-dark vh-100 vw-100 text-white p-4">
      <Container>
        <TaskCreator createNewTask={createNewTask} />
        <Tasktable tasks={taskItems} toggleTask={toggleTask} />
        <VisibilityControl
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          handleDeleteTask={handleDeleteTask}
        />
        {showCompleted === true && (
          <Tasktable
            tasks={taskItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )}
      </Container>
    </main>
  );
}

export default App;
