import React from 'react';
import "./styles.css"


export default function CardGestao2(props) {
    return (
        <div className="cardgestao2">
            <div className="boximg">
                <span>{props.img}</span>
            </div>

            <h5>{props.titulo}</h5>
        </div>
    )
}
