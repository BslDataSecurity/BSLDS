import React from "react";

import Header from "../../Header";
import GestaoDados from "./Gestao";
import Footer from "../../Footer";
import BotaoWhats from "../../ButtonWhats";

export default function PaginaBanco() {
    return (
        <>
            <Header/>
            <GestaoDados/>
            <BotaoWhats/>
            <Footer/>
        </>
    )
}