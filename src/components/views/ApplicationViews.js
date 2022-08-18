import React from "react"
import { Outlet, Route, Routes } from "react-router-dom";
import { ArticleForm } from "../news/ArticleForm.js";
import { ArticleList } from "../news/ArticleList.js";
import { EditArticle } from "../news/EditArticle.js";

export const ApplicationViews = () => {
    return (
        <Routes>
          
      <Route
        path="/"
        element={
          <React.Fragment>
            <h1>NUTSHELL</h1>
            <div>Your one-stop-shop for news, planning, and communication</div>

            <Outlet />
          </React.Fragment>
        }
      >
        <Route path="/" element={<ArticleList />} />
        <Route path="/article/create" element={<ArticleForm />} />
        <Route path="/article/:articleId" element={<EditArticle />} />
      </Route>
    </Routes>
    )
}