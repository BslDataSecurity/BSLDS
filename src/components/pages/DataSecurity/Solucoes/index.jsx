import React from "react";
import { Link } from 'react-router-dom'
import "../../../../utils/i18n"
import { useTranslation } from "react-i18next"
import ItemSolucao from "./cardsolucoes/ItemLista";

import { FaSearch } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { IoSpeedometerOutline } from "react-icons/io5";

import "./styles.css"

export default function Solucao() {

    const { t } = useTranslation();

    return (
        <section className="solucao">

            <div className="cardimg">
                <div className="boximg">
                    <img src="assets/cyber-security-data.jpg" alt="" />
                </div>

                <div className="boxinfo">
                    <h2>{t('DATA SECURITY')}</h2>
                    <p>{t('Proteção adaptada às necessidades exclusivas de sua empresa, com eficiência e redução de riscos.')}</p>
                    <Link className="faleconosco" to='/fale-conosco'>
                        <p>{t('Conte-nos mais')}</p>
                    </Link>
                </div>
            </div>

            <div className="boxsolucoes">
                <h3>{t('Soluções que garantem proteção e segurança abrangentes para seus dados e sistemas')}</h3>
                <p>{t('Nossa equipe de Segurança de Dados está aqui para garantir que seus dados importantes estejam sempre protegidos. Nós cuidamos de tudo, desde identificar e classificar seus dados até monitorar quem tem acesso a eles, tudo para manter suas informações seguras. Usamos análises avançadas para identificar possíveis vulnerabilidades, proporcionando a você a visibilidade necessária por meio de um painel de controle intuitivo e fácil de usar. Nosso compromisso é assegurar que sua empresa esteja em conformidade com os mais rigorosos padrões de segurança, ao mesmo tempo em que automatizamos processos, reduzimos custos e implementamos políticas que garantam um ambiente seguro e confiável para todos.')}</p>
            </div>


            <div className="cardsolucao">
                <div className="card">
                    <ItemSolucao img={<FaSearch color="#fff" />} texto={t("Automatização e Classificação de Dados")} />
                </div>

                <div className="card">
                    <ItemSolucao img={<FaEye color="#fff"/>} texto={t("Monitoramento de Atividades e Proteção de Dados")} />
                </div>

                <div className="card">
                    <ItemSolucao img={<FaGears color="#fff" />} texto={t("Aceleração da Conformidade de Dados")} />
                </div>

                <div className="card">
                    <ItemSolucao img={<IoSpeedometerOutline color="#fff" />} texto={t("Análise de Risco e Priorização de Investigações")} />
                </div>
            </div>
        </section>
    )
}