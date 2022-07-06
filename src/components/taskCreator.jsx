import React, { useState } from "react";

export const TaskCreator = (props) => {
  const [newTaskName, setNewTaskName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createNewTask(newTaskName);
    // localStorage.setItem("task", newTaskName);
    setNewTaskName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingresar tarea nueva"
        value={newTaskName || ""}
        onChange={(e) => setNewTaskName(e.target.value)}
      />
      <button>
        Guardar Tarea
      </button>
    </form>
  );
};
