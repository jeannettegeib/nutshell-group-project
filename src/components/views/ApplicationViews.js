import { Outlet, Route, Routes } from "react-router-dom";
import { TaskEdit } from "../tasks/TaskEdit";
import { TaskForm } from "../tasks/TaskForm";
import { TaskList } from "../tasks/TaskList";
import { MessageList } from "../messages/messageList.js";
import { MessageForm } from "../messages/messageForm";
import {MessageEdit} from "../messages/messageEdit";
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

            <Outlet />
            <MessageList />
            <TaskList/>
          </>
        }
      >
        <Route path="messages/:messageId/edit" element={<MessageEdit/> } />
        <Route path="/task/create" element={<TaskForm />} />
        <Route path="/message/create" element={ <MessageForm /> } />
        <Route path="tasks/:taskId" element={<TaskEdit />} />
      </Route>
    </Routes>
  );
};
