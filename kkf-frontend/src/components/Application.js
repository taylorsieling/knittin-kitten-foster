import React from 'react'
import '../index.css'

const Application = ({app}) => {
    console.log(app)
    return (
        <div className="card">
           <div className="card-header">
                <h2>{app.first_name} {app.last_name}</h2>
            </div>
            <div className="card-body">

            </div>
        </div>
    )
}

export default Application;