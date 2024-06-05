import React from "react";
import './styles.css'
import "../../../../utils/i18n"
import { useTranslation } from "react-i18next"

export default function Experiencia() {

    const { t } = useTranslation();

    return (
        <section className="fundo_experiencia">
            <div className='experiencia'>
                <h3>{t("Nossa experiência")}</h3>

                <p>{t('Há mais de nove anos, a BSL Data Security tem marcado presença no mercado, oferecendo soluções confiáveis e inovadoras para uma ampla gama de necessidades empresariais globalmente, contando com uma base diversificada de clientes no Brasil, Estados Unidos e Reino Unido.')}<br /><br />

                {t("Especializados no gerenciamento de banco de dados das mais diversas tecnologias, incluindo Oracle, Microsoft SQL, MySQL, Hana, entre outras, nossa equipe experiente se dedica a oferecer serviços da mais alta qualidade, garantindo alto desempenho sem comprometer a segurança essencial para os dados de nossos clientes. Além disso, destacamos nossa expertise em trabalhar tanto em ambientes locais quanto nas principais nuvens públicas.")}<br /><br />

                {t('Com nossas principais certificações em Oracle, estamos capacitados para navegar em ambientes com infraestruturas complexas, utilizando os recursos mais recomendados da fornecedora, como Oracle RAC, Exadata, Dataguard, Tuning e Diagnostic Package. Além disso, oferecemos uma monitoria exclusiva utilizando a ferramenta mais utilizada no mercado, o Zabbix, proporcionando aos clientes uma visão detalhada e em tempo real de suas operações críticas.')}<br /><br />

                {t("Reconhecemos a importância da capacitação contínua da equipe e, por isso, oferecemos treinamentos especializados para equipes de DBAs, mantendo-as atualizadas com as últimas práticas e tecnologias do setor.")}<br /><br />

                {t("Na BSL Data Security, estamos comprometidos em fornecer soluções confiáveis e personalizadas para atender às necessidades únicas de nossos clientes, impulsionando o sucesso de seus negócios por meio de uma gestão eficiente e segura de seus dados críticos.")}</p>
            </div>
        </section>
    )
}