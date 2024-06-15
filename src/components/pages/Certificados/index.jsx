import React from "react";

import Header from "../../Header";
import CardCertificados from "./Certificado";
import Footer from "../../Footer";
import BotaoWhats from "../../ButtonWhats";

export default function Certificado() {
    return (
        <>
            <Header/>
            <CardCertificados/>
            <BotaoWhats/>
            <Footer/>
        </>
    )
}