import { isClickableInput } from "@testing-library/user-event/dist/utils";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const TaskEdit = () => {
  //State Object
  const [task, update] = useState({
    task: "",
    expectedComplete: "",
  });

  //Variable storing route parameter
  const { taskId } = useParams();
  const navigate = useNavigate();

  //Perform a GET for task state from API
  useEffect(() => {
    fetch(`http://localhost:8088/tasks/${taskId}`)
      .then((response) => response.json())
      .then((data) => {
        update(data);
      });
  }, [taskId]);

  const handleSaveButtonClick = (event) => {
    event.preventDefault();

    // TODO: Perform the fetch() to PUT the object
    return fetch(`http://localhost:8088/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((response) => response.json())
      .then(() => {
        navigate("/");
      });
  };

  return (
    <form className="tasktEdit">
      <h2 className="taskEdit__title">Edit Task</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="task">Task to Complete: </label>
          <textarea
            required
            autoFocus
            type="text"
            className="form-control"
            placeholder="Describe Task"
            value={task.task}
            onChange={(e) => {
              const copy = { ...task };
              copy.task = e.target.value;
              update(copy);
            }}
          ></textarea>
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
              update(copy);
            }}
          />
        </div>
      </fieldset>
      <button
        onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
        className="btn btn-primary"
      >
        Save Edits
      </button>
    </form>
  );
};
