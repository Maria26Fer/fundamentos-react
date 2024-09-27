import React from 'react'
import "./Card.css"
// eslint-disable-next-line import/no-anonymous-default-export
export default ({color, titulo, children}) => {

    const cardStyle = {
        backgroundColor: color || '#F00',
        borderColor: color || '#F00'
    }

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{titulo}</div>
            <div className="Content">
                {children}
            </div>
        </div>
    )
}