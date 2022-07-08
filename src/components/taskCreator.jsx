import { useState} from "react";

export const TaskCreator = (props) => {
  const [newTaskName, setNewTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createNewTask(newTaskName);
    setNewTaskName("");//esta línea limpia el campo de texto
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task"
        onChange={(e) => setNewTaskName(e.target.value)}
        value={newTaskName}
      />
      <button name="button" id="button">
        Save task
      </button>
    </form>
  );
};
