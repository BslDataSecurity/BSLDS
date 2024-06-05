import React from "react";
import { Link } from 'react-router-dom'

import { useEffect, useState } from "react";
import { Container, ContentMobile } from "./MenuHamburguerStyles.ts";
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";

import "../../utils/i18n.js"
import { useTranslation } from "react-i18next"


export default function Header() {

    const { t, i18n } = useTranslation();

    const changeLanguage = value => {
        i18n.changeLanguage(value)
    }

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const handleResize = () => {
        if (window.innerWidth > 428 && !menuOpen) {
            setMenuOpen(true)
        }
        if (window.innerWidth < 427 && menuOpen) {
            setMenuOpen(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [menuOpen])

    return (
        <Container>
            <ContentMobile onClick={toggleMenu}>
                {menuOpen ? <IoCloseSharp className="botao_nav" color="black" /> : <TiThMenu className="botao_nav" color="white" />}
            </ContentMobile>

            <div className="box-img">
                <img className="logo" src="assets/capasemfundo.png" alt="" />
            </div>

            <div className="botoes">
                <button className="botao en" onClick={() => changeLanguage('en')}>
                    <img src="assets/en.png" alt="" />
                </button>
                <button className="botao en" onClick={() => changeLanguage('pt')}>
                    <img src="assets/pt.png" alt="" />
                </button>
                <button className="botao" onClick={() => changeLanguage('es')}>
                    <img src="assets/espanha.webp" alt="" />
                </button>
            </div>

            {menuOpen || window.innerWidth > 5000 ? <nav>
                <Link className="links-navbar marge" to='/'>Home</Link>
                <Link className="links-navbar" to='/data-security'>{t('Segurança de dados')}</Link>
                <Link className="links-navbar" to='/banco-de-dados'>{t("Banco de Dados")}</Link>
                <Link className="links-navbar" to='/engenharia-de-dados'>{t('Engenharia de Dados')}</Link>
                <Link className="links-navbar" to='/fale-conosco'>{t('Fale Conosco')}</Link>
                <Link className="links-navbar" to='/sobre'>{t('Sobre')}</Link>
            </nav> : <></>}
        </Container>
    )
}