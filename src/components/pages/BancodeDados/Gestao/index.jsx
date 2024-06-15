import React from "react";
import { Link } from "react-router-dom";
import "../../../../utils/i18n"
import { useTranslation } from "react-i18next"
import CardGestao1 from "./ItemCard1";

import { CgListTree } from "react-icons/cg";
import { FiDatabase } from "react-icons/fi";
import { GrOptimize } from "react-icons/gr";
import { MdOutlineSecurity } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { TbSortDescendingNumbers } from "react-icons/tb";

import "./styles.css"

export default function GestaoDados() {

    const { t } = useTranslation();

    return (
        <section className="gestao">

            <div className="cardimgdados">
                <div className="boximg">
                    <img src="assets/highly.jpg" alt="" />
                </div>

                <div className="boxinfo">
                    <h2>{t('BANCO DE DADOS')}</h2>
                    <p>{t('Liberte todo o poder dos seus dados e alcance o sucesso que você merece!')}</p>
                    <Link className="faleconosco" to='/fale-conosco'>
                        <p>{t('Conte-nos mais')}</p>
                    </Link>
                </div>
            </div>

            <div className="boxgestao">
                <h3>{t('Experiência incomparável em gestão de bancos de dados')}</h3>
                <p>{t('Somos uma empresa especializada no gerenciamento de bancos de dados de diversas tecnologias, incluindo Oracle, Microsoft SQL, MySQL e Hana. Contamos com uma equipe de profissionais altamente qualificados e experientes em gestão de TI, possuindo certificações de nível internacional')}</p>


                <div className="cardsgestao">
                    <div className="cards">
                        <CardGestao1 img={<CgListTree color="#fff" />} titulo={t("Administração de Banco de Dados")} paragrafo={t("Mantenha seus sistemas em alto desempenho.")} />
                    </div>

                    <div className="cards">
                        <CardGestao1 img={<FiDatabase color="#fff" />} titulo={t("Migração de Dados")} paragrafo={t("Excelência em trânsito de sistemas legados para plataformas avançadas.")} />
                    </div>

                    <div className="cards">
                        <CardGestao1 img={<GrOptimize color="#fff" />} titulo={t("Otimização de Desempenho")} paragrafo={t("Acelere seus bancos de dados para resultados impactantes.")} />
                    </div>

                    <div className="cards">
                        <CardGestao1 img={<MdOutlineSecurity color="#fff" />} titulo={t("Segurança de Dados")} paragrafo={t("Proteja seus ativos com medidas de segurança sólidas e confiáveis")} />
                    </div>

                    <div className="cards">
                        <CardGestao1 img={<FaUserTie color="#fff" />} titulo={t("Consultoria Especializada")} paragrafo={t("Conte com nossa orientação estratégica.")} />
                    </div>

                    <div className="cards">
                        <CardGestao1 img={<TbSortDescendingNumbers color="#fff" />} titulo={t("Redução de custos")} paragrafo={t("Cortamos as despesas, aumentamos a eficiência e aprimoramos as estratégias.")} />
                    </div>
                </div>
            </div>

        </section>
    )
}