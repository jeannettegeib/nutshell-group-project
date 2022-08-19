import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./News.css"

export const ArticleList =()=>{
    const [articles , setArticles]=useState([])
    const navigate=useNavigate()

    const getArticles=()=>{
        return (
        fetch(`http://localhost:8088/news`)
            .then(response=>response.json())
            .then( (articleArray)=>{setArticles(articleArray) }  )
            )      
    }

    useEffect(
        ()=>{
            (
                fetch(`http://localhost:8088/news`)
                    .then(response=>response.json())
                    .then( (articleArray)=>{setArticles(articleArray) }  )
                    )  
        },
        [articles]
    )

  
    return(
        <React.Fragment>
            <article className="news">
            <h2>News of Interest</h2>
            {
                articles.map(
                    (article)=>{
                        return (
                        <section className="article" key={`article--${article.id}`}>
                            
                            <header className="title">
                                {article.title}
                            </header>
                            
                            <p className="synopsis">
                                {article.synopsis}
                            </p>

                            <footer className="url">
                            <Link to={`${article.url}`}>{article.url}</Link>
                                
                            </footer>

                            <button onClick={()=>{navigate(`/article/${article.id}`)}}
                            className="article_edit">Edit
                            </button>

                            <button onClick={()=>{
                            fetch(`http://localhost:8088/news/${article.id}`,{
                            method: "DELETE" 
                             })
                            .then(()=>{getArticles()})
                            }}
                            className="article_delete">Delete
                            </button>
    
                        </section>
                 ) }
                )
            }
            <button onClick={()=>navigate("/article/create")}>Add News Article</button>
            </article>
        </React.Fragment>
    )
}