import React from "react";

import Header from "../../Header";
import ListaServico from "./servicos_home/ListadeServico";
import Experiencia from "./Experiencia";
import Footer from "../../Footer";

export default function PaginaHome() {
    return (
        <>
            <Header/>
            <ListaServico/>
            <Experiencia/>
            <Footer/>
        </>
    )
}