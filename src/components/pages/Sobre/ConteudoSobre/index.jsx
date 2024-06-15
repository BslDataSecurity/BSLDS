import React from "react";
import "./styles.css"

import "../../../../utils/i18n"
import { useTranslation } from "react-i18next"


export default function Conteudo() {

    const { t } = useTranslation();

    return (
        <section className="secaoConteudo">
            <div className="boxconteudo">
                <h2>{t("Quem somos")}</h2>

                <p>{t('Há mais de nove anos, a BSL Data Security tem marcado presença no mercado, oferecendo soluções confiáveis e inovadoras para uma ampla gama de necessidades empresariais globalmente, contando com uma base diversificada de clientes no Brasil, Estados Unidos e Reino Unido.')}<br /><br />

                {t("Especializados no gerenciamento de banco de dados das mais diversas tecnologias, incluindo Oracle, Microsoft SQL, MySQL, Hana, entre outras, nossa equipe experiente se dedica a oferecer serviços da mais alta qualidade, garantindo alto desempenho sem comprometer a segurança essencial para os dados de nossos clientes. Além disso, destacamos nossa expertise em trabalhar tanto em ambientes locais quanto nas principais nuvens públicas.")}<br /><br />

                {t("Na BSL Data Security, estamos comprometidos em fornecer soluções confiáveis e personalizadas para atender às necessidades únicas de nossos clientes, impulsionando o sucesso de seus negócios por meio de uma gestão eficiente e segura de seus dados críticos.")}</p>
            </div>


            <div className="boxconteudo">
                <h2>{t("Missão")}</h2>

                <p>{t("Nosso objetivo não é apenas proteger os dados, mas também proporcionar segurança e tranquilidade para cada cliente que confia em nós para proteger o que é mais importante, seus dados mais preciosos com integridade, confidencialidade e disponibilidade incomparáveis. Através da inovação contínua com tecnologia de ponta e uma abordagem centrada no cliente onde estamos comprometidos em construir um ambiente seguro onde a confiança prevalece.")}</p>
            </div>

            <div className="boxconteudo">
                <h2>{t("Valores")}</h2>
                <p>{t("Nossa empresa se compromete com integridade, confiança, disponibilidade e inovação centrada no cliente para garantir paz e tranquilidade através da segurança de dados.")}</p><br />

                <h5>{t("Paz e Tranquilidade")}</h5>
                <p>{t("Na nossa empresa, o valor da paz e tranquilidade é mais do que uma promessa - é um compromisso inabalável com a serenidade e o bem-estar dos nossos clientes. Estamos dedicados a proporcionar uma experiência tranquila e sem preocupações, onde os nossos clientes possam confiar plenamente em nós para resolver quaisquer problemas de forma rápida e eficiente. Nosso objetivo é criar um ambiente onde a paz de espírito seja garantida, onde cada   interação com a nossa empresa inspire confiança e segurança.")}</p><br />

                <h5>{t("Integridade")}</h5>
                <p>{t("Na nossa empresa, a integridade é o alicerce sobre o qual construímos cada relacionamento. Assim como trabalhamos incansavelmente para garantir a integridade dos dados dos nossos clientes, também nos dedicamos a cultivar relacionamentos baseados na transparência, honestidade e respeito mútuo.")}</p><br />

                <h5>{t("Disponibilidade")}</h5>
                <p>{t("Em nossa empresa, a disponibilidade não é apenas um valor, é uma filosofia que permeia todas as nossas ações. Estamos comprometidos em estar sempre ao alcance de nossos clientes, prontos para oferecer o melhor serviço possível, independentemente do momento ou da situação.")}</p><br />

                <h5>{t("Inovação")}</h5>
                <p>{t("Na nossa empresa, a busca constante pela excelência é impulsionada pela inovação. Estamos firmemente comprometidos em não apenas atender, mas também superar as expectativasdos nossos clientes, e acreditamos que a inovação é o caminho para alcançar esse objetivo.")}</p><br />

            </div>

        </section>
    )
}