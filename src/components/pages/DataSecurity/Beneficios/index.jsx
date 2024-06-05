import React from "react";
import "./styles.css";

import "../../../../utils/i18n"
import { useTranslation } from "react-i18next"

export default function Beneficio() {

    const { t } = useTranslation();

    return (
        <section className="secaofoto">
            <h3>{t('Benefícios da BSL Data Security para a Segurança de Dados')}</h3>
            <div className="cards">
                <div className="card">
                    <span>{t('Soluções Personalizadas')}</span>
                    <p>{t('Reconhecemos a singularidade inerente a cada entidade corporativa. Nossa abordagem é pautada na adaptação meticulosa de nossas soluções para se alinharem de maneira ideal à infraestrutura específica de sua empresa, sem distinção quanto ao porte organizacional.')}</p>
                </div>

                <div className="card">
                    <span>{t('Eficiência e Redução de Riscos')}</span>
                    <p>{t('Em adição à proteção dos seus dados, nós nos empenhamos em aprimorar a sua segurança de forma abrangente. Este compromisso traduz-se em uma significativa redução dos riscos inerentes e dos custos associados à segurança de dados.')}</p>
                </div>
            </div>
        </section>
    )
}