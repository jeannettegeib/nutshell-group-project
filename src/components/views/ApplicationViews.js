import { Outlet, Route, Routes } from "react-router-dom";
import { TaskEdit } from "../tasks/TaskEdit";
import { TaskForm } from "../tasks/TaskForm";
import { TaskList } from "../tasks/TaskList";
import {EventList} from "../events/EventList";
import { EventForm } from "../events/EventForm";
import { EventEdit } from "../events/EventEdit";
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
            <EventList />
            <TaskList />
            {/* <EventEdit /> */}
            
          </>
        }
      />
      <Route path ="/event/:eventId" element={<EventEdit />} />
        <Route path="/event/create" element={<EventForm />} />
        <Route path="/task/create" element={<TaskForm />} />
       
        <Route path="tasks/:taskId" element={<TaskEdit />} />
       
     
    </Routes>
  );
};