import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PaginaHome from "../components/pages/PaginaPrincipal";
import DataSecurity from "../components/pages/DataSecurity";
import PaginaBanco from "../components/pages/BancodeDados";
import PaginaEngenharia from "../components/pages/EngenhariadeDados";
import PaginaContato from "../components/pages/FaleConosco";
import Sobre from "../components/pages/Sobre";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<PaginaHome />} />
                <Route path="/data-security" element={<DataSecurity />} />
                <Route path="/banco-de-dados" element={<PaginaBanco />} />
                <Route path="/engenharia-de-dados" element={<PaginaEngenharia />} />
                <Route path="/fale-conosco" element={<PaginaContato />} />
                <Route path="/sobre" element={<Sobre />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas