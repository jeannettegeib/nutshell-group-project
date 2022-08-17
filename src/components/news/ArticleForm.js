import React, {useState} from "react"
import { useNavigate } from "react-router-dom"

export const ArticleForm=()=>{
    const [article, update]=useState({
        title:"",
        url:"",
        synopsis:""
    })
    const localUser=localStorage.getItem("nutshell_user")
    const userObject=JSON.parse(localUser)
    const navigate=useNavigate()

    const handlePostButtonClick=(event)=>{
        event.preventDefailt()

        const articleToSendToAPI={
           userId: userObject,
           url: article.url,
           title: article.title,
           synopsis: article.synopsis
        }

        return fetch(`http://localhost:8088/news`, {
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(articleToSendToAPI)
        })
        .then(response =>response.json())
        .then(()=>{
            navigate("../../")
        })

    }

    return(
        
            <form className="articleForm">
                <h2 className="articleForm__title">Add a New Article to your Dashboard</h2>
                <fieldset>
                    <div className="form-group">
                     <label htmlFor="articleTitle">Article Title:</label>
                     <input type="text" placeholder="add the article's title" value={article.title} onChange={(evt)=>{
                        const copy={...article}
                        copy.title=evt.target.value
                        update(copy)
                        }} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                     <label htmlFor="articleURL">Article Link:</label>
                     <input type="text" placeholder="paste in a link to the article" value={article.url} onChange={(evt)=>{
                        const copy={...article}
                        copy.url=evt.target.value
                        update(copy)
                        }} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                     <label htmlFor="articleSynopsis">Article Synopsis:</label>
                     <input type="text" placeholder="write a brief synopsis of the article" value={article.synopsis} onChange={(evt)=>{
                        const copy={...article}
                        copy.synopsis=evt.target.value
                        update(copy)
                        }} />
                    </div>
                </fieldset>
                <button onClick={(clickEvent)=>handlePostButtonClick(clickEvent)} className="btn">Post Article</button>
            </form>
      
    )
}