import React from "react"
import { Outlet, Route, Routes } from "react-router-dom";
import { ArticleForm } from "../news/ArticleForm.js";
import { ArticleList } from "../news/ArticleList.js";
import { EditArticle } from "../news/EditArticle.js";
import { BookAds } from "../tasks/BookAds";
import { CompletedTasks } from "../tasks/CompletedTasks";
import { TaskEdit } from "../tasks/TaskEdit";
import { TaskForm } from "../tasks/TaskForm";
import { TaskList } from "../tasks/TaskList";
import {EventList} from "../events/EventList";
import { EventForm } from "../events/EventForm";
import { EventEdit } from "../events/EventEdit";
import "./views.css";
import { MessageList } from "../messages/messageList.js";
import { MessageForm } from "../messages/messageForm";



export const ApplicationViews = () => {
  const localNutshellUser = localStorage.getItem("nutshell_user");
  const nutshellUserObject = JSON.parse(localNutshellUser);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Fragment>
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
       

            <BookAds />
            <MessageList />
            <TaskList />
            <ArticleList />
            <Outlet />

          </React.Fragment>
        }
      >
        <Route path="/article/create" element={<ArticleForm />} />
        <Route path="/article/:articleId" element={<EditArticle />} />
        <Route path="/task/create" element={<TaskForm />} />
        <Route path="/task/complete" element={<CompletedTasks />} />
        <Route path="/message/create" element={<MessageForm />} />

        <Route path="tasks/:taskId" element={<TaskEdit />} />
       
     
    </Routes>
  );
};