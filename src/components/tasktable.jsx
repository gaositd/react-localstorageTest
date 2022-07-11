import React, { Fragment } from "react";
import { TaskRow } from "./taskRow";

export const Tasktable = (props) => {
  const { tasks, toggleTask, showCompleted = false } = props;

  const tasksTableRows = (doneValue) => {
    return tasks
            .filter(task => task.done === doneValue)
            .map((item) => (
      <TaskRow key={item.name} item={item} toggleTask={toggleTask} />
    ));
  };

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
        <tbody>{tasksTableRows(showCompleted)}</tbody>
      </table>
    </Fragment>
  );
};
