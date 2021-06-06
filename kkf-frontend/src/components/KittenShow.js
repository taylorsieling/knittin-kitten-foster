import React from 'react'

const KittenShow = (props) => {
    console.log('kitten show', props)
    return (
        <div className="kitten-grid">
            
            <h3>Hi, I'm the kitten show component!</h3>
            <p>{props.kitten.name}</p>
        </div>
    )
}

export default KittenShow;