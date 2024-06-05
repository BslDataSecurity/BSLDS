import React from 'react';
import "./styles.css"


export default function CardEng1(props) {
    return (
        <div className="cardenge1">
            <div className="boximg">
                <span>{props.img}</span>
            </div>

            <h5>{props.titulo}</h5>

            <p>{props.paragrafo}</p>
        </div>
    )
}
