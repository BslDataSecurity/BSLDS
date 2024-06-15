import React from "react";

import Header from "../../Header";
import ListaServico from "./servicos_home/ListadeServico";
import Experiencia from "./Experiencia";
import Footer from "../../Footer";
import BotaoWhats from "../../ButtonWhats";

export default function PaginaHome() {
    return (
        <>
            <Header/>
            <ListaServico/>
            <Experiencia/>
            <BotaoWhats/>
            <Footer/>
        </>
    )
}