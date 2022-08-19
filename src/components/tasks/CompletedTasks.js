import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { CompletedCheckbox } from "./CompletedCheckbox";
import "./tasks.css";

export const CompletedTasks = () => {
  const [complete, setComplete] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8088/tasks")
      .then((response) => response.json())
      .then((taskArray) => {
        setComplete(taskArray);
      });
  }, [complete]);

  return (
    <>
      <button
        className="backButton"
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </button>

      <article className="taskList">
        {complete.map((task) => {
          if (task.completed === true) {
            return (
              <>
                <section className="taskItems">
                  <section
                    className="taskItem"
                    key={`complete--${complete.id}`}
                  >
                    <CompletedCheckbox taskProp={task} />
                    <section className="column">
                      <div className="taskName">{task.task}</div>
                      <div className="complete">
                        Complete By: {task.expectedComplete}
                      </div>
                    </section>
                  </section>
                </section>
              </>
            );
          } else {
            return "";
          }
        })}
      </article>
    </>
  );
};
