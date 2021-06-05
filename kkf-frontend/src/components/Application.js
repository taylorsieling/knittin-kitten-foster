import React from 'react'
import { Link } from 'react-router-dom' 
import '../index.css'

const Application = ({app}) => {
    return (
        <div className="card">
           <div className="card-header">
                <img className="cardimg" src={app.portrait_url} alt={app.name} width="100"/>
            </div>
            <div className="card-body">
                <p className="app-status">{app.status}</p>
                <h2 className="app-name">{app.name}</h2>
                <p className="app-desc">
                    Sex: {app.sex}<br/>
                    Age: {app.age}<br/>
                    {app.breed} - {app.pattern}<br/><br/>
                    <Link className="app-link" key={app.id} to={`/kittens/${app.id}`}>{app.name}'s Details</Link>
                </p>
            </div>
        </div>
    )
}

export default Application;