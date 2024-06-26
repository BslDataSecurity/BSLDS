import React from "react";

import Header from "../../Header";
import Conteudo from "./ConteudoSobre";
import Footer from "../../Footer";
import BotaoWhats from "../../ButtonWhats";

export default function Sobre() {
    return (
        <>
            <Header/>
            <Conteudo/>
            <BotaoWhats/>
            <Footer/>
        </>
    )
}