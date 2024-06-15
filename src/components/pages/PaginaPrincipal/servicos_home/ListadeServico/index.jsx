import React from 'react';
import ItemListaServico from '../ItemLista';
import "./styles.css"
import "../../../../../utils/i18n"
import { useTranslation } from "react-i18next"

import './styles.css';

export default function ListaServico() {

    const { t } = useTranslation();

    return (
        <section className='secaoServicos'>

            <div className='infoServico'>
                <h2>{t('Conheça nossos serviços')}</h2>
                <p>{t('Com a BSL Data Security, você terá todas as ferramentas essenciais para construir um futuro seguro e próspero para sua empresa. Nossas soluções especializadas em administração e segurança de dados são projetadas para oferecer tranquilidade e eficiência. Descubra como podemos fortalecer sua infraestrutura e proteger seus ativos digitais. Conheça nossas soluções hoje mesmo e garanta o sucesso duradouro de sua empresa.')}</p>
            </div>


            <div className='cards'>
                <div className="card">
                    <ItemListaServico className="img"
                        paragrafo={t("Oferecemos proteção adaptada às necessidades exclusivas da sua empresa, garantindo eficiência e redução de riscos")} titulo={t("Segurança de dados")} imagem="assets/cyber-security-data.jpg" />
                </div>

                <div className="card">
                    <ItemListaServico className="img"
                        paragrafo={t("Nossa equipe de especialistas em engenharia de dados oferece soluções personalizadas focadas em qualidade, segurança e eficiência. Projetamos e implementamos pipelines de dados que garantem a integridade, disponibilidade e confidencialidade das suas informações.")} titulo={t("Engenharia de Dados")} imagem="assets/homemfuturo.jpg" />
                </div>

                <div className="card">
                    <ItemListaServico className="img"
                        paragrafo={t("Desbloqueie todo o potencial dos seus dados e conquiste o sucesso que sua empresa merece!")} titulo={t("Banco de Dados")} imagem="assets/highly.jpg" />
                </div>
            </div>
        </section>
    )
}