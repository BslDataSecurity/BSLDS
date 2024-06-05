import React from 'react';
import "./styles.css"


export default function ItemListaServico(props) {
    return (
        <div className="boxServicoHome">
            <div className="boximg">
                <img src={props.imagem} />
            </div>

            <h3>{props.titulo}</h3>

            <p>{props.paragrafo}</p>
        </div>
    )
}
