import React from 'react'
import '../index.css'

const Application = ({app}) => {
    console.log(app)
    return (
        <li className="app">
            <p>{app.first_name} {app.last_name}</p>
        </li>
    )
}

export default Application;