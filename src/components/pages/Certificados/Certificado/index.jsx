import React from "react";
import "../../../../utils/i18n"
import { useTranslation } from "react-i18next"
import CardGestao2 from "./ItemCard2";

import { FaCertificate } from "react-icons/fa";

import "./styles.css"

export default function CardCertificados() {

    const { t } = useTranslation();

    return (
        <section className="certificacao">

            <div className="certificado">
                <h3>{t('Contamos com uma equipe reconhecida, que segue um processo de desenvolvimento seguro e adota uma cultura ágil como parte integrante de nossas práticas organizacionais')}</h3>

                <div className="cardscertificado">
                    <div className="card">
                        <CardGestao2 img={<FaCertificate color="#fff" />} titulo={t("Oracle Database Administration 2019 Certified Professional")} />
                    </div>

                    <div className="card">
                        <CardGestao2 img={<FaCertificate color="#fff" />} titulo={t("Oracle Database 11g Administrator Certified Professional")} />
                    </div>

                    <div className="card">
                        <CardGestao2 img={<FaCertificate color="#fff" />} titulo={t("Oracle Database 12c Administrator Certified Professional")} />
                    </div>

                    <div className="card">
                        <CardGestao2 img={<FaCertificate color="#fff" />} titulo={t("Oracle Database 12c: Install and Upgrade")} />
                    </div>

                    <div className="card">
                        <CardGestao2 img={<FaCertificate color="#fff" />} titulo={t("Oracle Database 11g Administrator Certified Associate")} />
                    </div>
                </div>
            </div>

        </section>
    )
}