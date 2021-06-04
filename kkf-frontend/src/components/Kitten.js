import React from 'react'
import '../index.css'

const Kitten = ({kitten}) => {
    return (
        <div className="card">
           <div className="card-header">
                <img className="cardimg" src={kitten.portrait_url} alt={kitten.name} width="100"/>
            </div>
            <div className="card-body">
                <p className="kitten-status">{kitten.status}</p>
                <h2 className="kitten-name">{kitten.name}</h2>
                <p className="kitten-desc">
                    Sex: {kitten.sex}<br/>
                    Age: {kitten.age}<br/>
                    {kitten.breed} - {kitten.pattern}
                </p>
            </div>
        </div>
    )
}

export default Kitten;