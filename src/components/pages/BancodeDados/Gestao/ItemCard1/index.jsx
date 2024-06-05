import React from 'react';
import "./styles.css"


export default function CardGestao1(props) {
    return (
        <div className="cardgestao1">
            <div className="boximg">
                <span>{props.img}</span>
            </div>

            <h5>{props.titulo}</h5>

            <p>{props.paragrafo}</p>
        </div>
    )
}
