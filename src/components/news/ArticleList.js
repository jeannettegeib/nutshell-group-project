import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./News.css"

export const ArticleList =()=>{
    const [articles , setArticles]=useState([])
    const navigate=useNavigate()

    useEffect(
        ()=>{
            fetch(`http://localhost:8088/news`)
            .then(response=>response.json())
            .then( (articleArray)=>{setArticles(articleArray) }  )
            console.log(articles)
        },
        []
    )

    return(
        <React.Fragment>
            <article className="news">
            <h2>News of Interest</h2>
            {
                articles.map(
                    (article)=>{
                        return <section className="article" key="${article.id}">
                            <header className="title">
                                {article.title}
                            </header>
                            <p className="synopsis">
                                {article.synopsis}
                            </p>
                            <footer>
                                {article.url}
                            </footer>
                        </section>
                    }
                )
            }
            <button onClick={()=>navigate("/article/create")}>Add News Article</button>
            </article>
        </React.Fragment>
    )
}