import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";

export const EditArticle =()=>{
    const [article, update]=useState({
        title:"",
        url:"",
        synopsis:""
    })
    const navigate=useNavigate()
    const { articleId } = useParams();
    
    //fetch the current article stored in API
    useEffect(()=>{
        fetch(`http://localhost:8088/news/${articleId}`)
        .then(r=>r.json())
        .then((data)=>{
            update(data)
        })
    },
    [articleId]
    )

    const handleEditButtonClick=(event)=>{
        event.preventDefault()

        return fetch(`http://localhost:8088/news/${article.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(article),
    })
      .then((response) => response.json())
      .then(() => {
        navigate("/");
      })
    }

return(
    <form className="articleForm">
                <h2 className="articleForm__title">Edit Article on your Dashboard</h2>
                <fieldset>
                    <div className="form-group">
                     <label htmlFor="articleTitle">Article Title:</label>
                     <input type="text" value={article.title} onChange={(evt)=>{
                        const copy={...article}
                        copy.title=evt.target.value
                        update(copy)
                        }} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                     <label htmlFor="articleURL">Article Link:</label>
                     <input type="text"  value={article.url} onChange={(evt)=>{
                        const copy={...article}
                        copy.url=evt.target.value
                        update(copy)
                        }} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                     <label htmlFor="articleSynopsis">Article Synopsis:</label>
                     <input type="text"  value={article.synopsis} onChange={(evt)=>{
                        const copy={...article}
                        copy.synopsis=evt.target.value
                        update(copy)
                        }} />
                    </div>
                </fieldset>
                <button onClick={(clickEvent)=>handleEditButtonClick(clickEvent)} className="btn btn-primary">Save Edits</button>
            </form>
)
}