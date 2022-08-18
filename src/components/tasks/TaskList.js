import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { BookAds } from "./BookAds";
import { Task } from "./Task";
import "./tasks.css";

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  // new state for google books api resource
  const [books, udpateBooks] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8088/tasks")
      .then((response) => response.json())
      .then((taskArray) => {
        setTasks(taskArray);
      });
  }, [tasks]);

  return (
    <>
      <br></br>
      <h3 className="taskHeader">Task List</h3>

      <button
        className="createTask"
        onClick={() => {
          navigate("/task/create");
        }}
      >
        Create Task
      </button>

      <article className="taskList">
        {tasks.map((task) => {
          if (task.completed === false) {
            return (
              <>
                <div></div>

                <section className="taskItems">
                  <section className="taskItem" key={`task--${task.id}`}>
                    <Task taskProp={task} />
                    <section className="column">
                      <div className="taskName">
                        <Link to={`/tasks/${task.id}`}>{task.task}</Link>
                      </div>
                      <div className="complete">
                        Complete By: {task.expectedComplete}
                      </div>
                      {/* <button 
                    className="button"
                    onClick={() => navigate("tasks/taskId")}>
            Edit
          </button> */}
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
