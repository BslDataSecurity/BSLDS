import React from 'react';
import "./styles.css"


export default function ItemSolucao(props) {
    return (
        <div className="boxsolucoes">
            <div className="boximg">
                <span>{props.img}</span>
            </div>

            <h5>{props.texto}</h5>
        </div>
    )
}
