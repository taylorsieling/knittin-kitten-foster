import React from 'react'

const KittenShow = ({kitten}) => {
    return (
        <div>
            <h3>Hi, I'm the kitten show component!</h3>
            <p>{kitten.name}</p>
        </div>
    )
}

export default KittenShow;