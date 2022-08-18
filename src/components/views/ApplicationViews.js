import React from "react"
import { Outlet, Route, Routes } from "react-router-dom";
import { ArticleForm } from "../news/ArticleForm.js";
import { ArticleList } from "../news/ArticleList.js";
import { EditArticle } from "../news/EditArticle.js";
import { TaskEdit } from "../tasks/TaskEdit";
import { TaskForm } from "../tasks/TaskForm";
import { TaskList } from "../tasks/TaskList";


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

            <Outlet />
          </React.Fragment>
        }
      >
        <Route path="/" element={<ArticleList />} />
        <Route path="/article/create" element={<ArticleForm />} />
        <Route path="/article/:articleId" element={<EditArticle />} />
        <Route path="/task/create" element={<TaskForm />} />

        <Route path="/" element={<TaskList />} />

        <Route path="tasks/:taskId" element={<TaskEdit />} />
      </Route>
    </Routes>
  );
};
