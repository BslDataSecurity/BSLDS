import React from "react";

import Header from "../../Header";
import EngenhariaDados from "./Engenharia";
import Footer from "../../Footer";
import BotaoWhats from "../../ButtonWhats";

export default function PaginaEngenharia() {
    return (
        <>
            <Header/>
            <EngenhariaDados/>
            <BotaoWhats/>
            <Footer/>
        </>
    )
}