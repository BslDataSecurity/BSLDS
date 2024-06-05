import React from "react";
import { Link } from "react-router-dom";
import "../../../../utils/i18n"
import { useTranslation } from "react-i18next"
import CardEng1 from "./CardEnge";

import { FaGlobeAmericas } from "react-icons/fa";

import "./styles.css"

export default function EngenhariaDados() {

    const { t } = useTranslation();

    return (
        <section className="engenharia">

            <div className="cardenge">
                <div className="boximg">
                    <img src="assets/homemfuturo.jpg" alt="" />
                </div>

                <div className="boxinfo">
                    <h2>{t('ENGENHARIA DE DADOS')}</h2>
                    <p>{t('Desenho e Implementação do pipeline que transforma os dados brutos provenientes de fontes diversas, como bancos de dados transacionais até arquivos de texto, em um formato homogêneo e adequado para análise.')}</p>
                    <Link className="faleconosco" to='/fale-conosco'>
                        {t('Conte-nos mais')}
                    </Link>
                </div>
            </div>

            <div className="boxenge">
                <h3>{t('Experiência incomparável em gestão dos dados')}</h3>

                <div className="cards">
                    <div className="cardeng">
                        <CardEng1 img={<FaGlobeAmericas color="#fff" />} titulo={t("Coleta de Dados")} paragrafo={t("coletar dados de diversas fontes, como bancos de dados, sistemas de arquivos,aplicativos da web e APIs")} />
                    </div>

                    <div className="cardeng">
                        <CardEng1 img={<FaGlobeAmericas color="#fff" />} titulo={t("Integração de Dados")} paragrafo={t("integrar  dados de diferentes fontes e formatos, garantindo que os dados sejam interoperáveis e consistentes em todo o ambiente de dados.")} />
                    </div>

                    <div className="cardeng">
                        <CardEng1 img={<FaGlobeAmericas color="#fff" />} titulo={t("Armazenamento e Processamento de dados")} paragrafo={t("configurar sistemas de armazenamento de dados escaláveis e eficientes, como bancos de dados relacionais, bancos de dados NoSQL, data lakes e sistemas de armazenamento em nuvem.")} />
                    </div>
                </div>

            </div>

        </section>
    )
}