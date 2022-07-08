import { useState} from "react";

export const TaskCreator = (props) => {
  // console.log(props);
  const [newTaskName, setNewTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(newTaskName);
    props.createNewTask(newTaskName);
    // localStorage.setItem("Task", JSON.stringify(newTaskName));
    setNewTaskName("");//esta línea limpia el campo de texto
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task"
        // onChange={(e) => {
        //   console.log(e.target.value);
        // }}
        onChange={(e) => setNewTaskName(e.target.value)}
        value={newTaskName}
      />
      <button name="button" id="button">
        Save task
      </button>
    </form>
  );
};
