import { Outlet, Route, Routes } from "react-router-dom";
import { BookAds } from "../tasks/BookAds";
import { CompletedTasks } from "../tasks/CompletedTasks";
import { TaskEdit } from "../tasks/TaskEdit";
import { TaskForm } from "../tasks/TaskForm";
import { TaskList } from "../tasks/TaskList";
import "./views.css"

export const ApplicationViews = () => {
  const localNutshellUser = localStorage.getItem("nutshell_user");
  const nutshellUserObject = JSON.parse(localNutshellUser);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>NUTSHELL</h1>
            <div className="introduction">
              Your one-stop-shop for news, planning, and communication
            </div>
            <br></br>
            <div className="introduction">
              {" "}
              Hello, {nutshellUserObject.username}!
            </div>
            <BookAds />
            <Outlet />
          </>
        }
      >
        <Route path="/task/create" element={<TaskForm />} />

        <Route path="/" element={<TaskList />} />

        <Route path="/task/complete" element={<CompletedTasks />} />

        <Route path="tasks/:taskId" element={<TaskEdit />} />
      </Route>
    </Routes>
  );
};
