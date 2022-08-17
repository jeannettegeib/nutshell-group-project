import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const TaskForm = () => {
  const [task, setTask] = useState({
    task: "",
    expectedComplete: "",
    completed: false,
  });

  const navigate = useNavigate();

  const localNutshellUser = localStorage.getItem("nutshell_user");
  const nutshellUserObject = JSON.parse(localNutshellUser);

  const handleSaveButtonClick = (event) => {
    event.preventDefault();

    // TODO: Create the object to be saved to the API
    const ticketToSendToAPI = {
      userId: nutshellUserObject.id,
      task: task.task,
      expectedComplete: task.expectedComplete,
      completed: false,
    };

    // TODO: Perform the fetch() to POST the object to the API
    return fetch("http://localhost:8088/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticketToSendToAPI),
    })
      .then((response) => response.json())
      .then(() => {
        navigate("/");
      });
  };

  return (
    <form className="taskForm">
      <h2 className="taskForm_title">Create New Task</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="task">Task to Complete: </label>
          <input
            required
            autoFocus
            type="text"
            className="form-control"
            placeholder="Describe Task"
            value={task.task}
            onChange={(e) => {
              const copy = { ...task };
              copy.task = e.target.value;
              setTask(copy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="expectedCompletion">Expected Completion Date: </label>
          <input
            required
            autoFocus
            type="date"
            className="form-control"
            placeholder="Enter Date"
            value={task.expectedComplete}
            onChange={(e) => {
              const copy = { ...task };
              copy.expectedComplete = e.target.value;
              setTask(copy);
            }}
          />
        </div>
      </fieldset>
      <button
        onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
        className="btn btn-primary"
      >
        Submit Task
      </button>
    </form>
  );
};
