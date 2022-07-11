import { useState } from "react";

export const TaskCreator = (props) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createNewTask(newTaskName);
    setNewTaskName(""); //esta línea limpia el campo de texto
  };
  return (
    <form onSubmit={handleSubmit} className="my-2 row">
      <div className="col-9 mt-1 mb-1">
        <input
          type="text"
          placeholder="Enter a new task"
          onChange={(e) => setNewTaskName(e.target.value)}
          value={newTaskName}
          className="form-control"
        />
      </div>
      <div className="col-3 mt-1 mb-1">
        <button name="button" id="button" className="btn btn-secondary btn-sm">
          Save task
        </button>
      </div>
    </form>
  );
};
