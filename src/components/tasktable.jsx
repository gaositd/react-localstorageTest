import React, { Fragment } from "react";
import { TaskRow } from './taskRow'

export const Tasktable = (props) =>{
  const { tasks, toggleTask } = props;

  const handleChange = (e)=>{
    console.log(e.target)
  }
  
  return (
    <Fragment>
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
          {tasks.map((item) => (
            <TaskRow key={item.name} item={item} toggleTask={toggleTask} />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}