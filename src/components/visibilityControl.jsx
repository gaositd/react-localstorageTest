import React from "react";

export const VisibilityControl = ({ setShowCompleted, handleDeleteTask, isChecked }) => {
  const handleDelete = () => {
    if(window.confirm('Are you sure you want to delete?')){
      handleDeleteTask();
    }
  };

  return (
    <div className="d-flex justify-content-between text-white mb-3 p-2">
      <br />
      <div className="form-check form-switch">
        <label htmlFor="show">
          Show Task Done Table
          <input
            type="checkbox"
            id="show"
            name="show"
            onChange={(e) => setShowCompleted(e.target.checked)}
            checked={isChecked}
            className="form-check-input"
          />
        </label>
      </div>
      <button onClick={handleDelete} className="btn btn-danger btn-sm ">Clear</button>
      <br />
      <br />
    </div>
  );
};
