import React from "react";
import { Link } from "react-router-dom";
import "../../../../utils/i18n"
import { useTranslation } from "react-i18next"
import CardGestao1 from "./ItemCard1";
import CardGestao2 from "./ItemCard2";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import { CgListTree } from "react-icons/cg";
import { FiDatabase } from "react-icons/fi";
import { GrOptimize } from "react-icons/gr";
import { MdOutlineSecurity } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { TbSortDescendingNumbers } from "react-icons/tb";
import { FaCertificate } from "react-icons/fa";

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

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 50,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <CardGestao1 img={<CgListTree color="#fff" />} titulo={t("Administração de Banco de Dados")} paragrafo={t("Mantenha seus sistemas em alto desempenho.")} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardGestao1 img={<FiDatabase color="#fff" />} titulo={t("Migração de Dados")} paragrafo={t("Excelência em trânsito de sistemas legados para plataformas avançadas.")} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardGestao1 img={<GrOptimize color="#fff" />} titulo={t("Otimização de Desempenho")} paragrafo={t("Acelere seus bancos de dados para resultados impactantes.")} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardGestao1 img={<MdOutlineSecurity color="#fff" />} titulo={t("Segurança de Dados")} paragrafo={t("Proteja seus ativos com medidas de segurança sólidas e confiáveis")} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardGestao1 img={<FaUserTie color="#fff" />} titulo={t("Consultoria Especializada")} paragrafo={t("Conte com nossa orientação estratégica.")} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardGestao1 img={<TbSortDescendingNumbers color="#fff" />} titulo={t("Redução de custos")} paragrafo={t("Cortamos as despesas, aumentamos a eficiência e aprimoramos as estratégias.")} />
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="certificado">
                <h3>{t('Contamos com uma equipe reconhecida, que segue um processo de desenvolvimento seguro e adota uma cultura ágil como parte integrante de nossas práticas organizacionais')}</h3>

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 50,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <CardGestao2 img={<FaCertificate color="#fff" />} titulo={t("Oracle Database Administration 2019 Certified Professional")} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardGestao2 img={<FaCertificate color="#fff" />} titulo={t("Oracle Database 11g Administrator Certified Professional")}  />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardGestao2 img={<FaCertificate color="#fff" />}titulo={t("Oracle Database 12c Administrator Certified Professional")}  />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardGestao2 img={<FaCertificate color="#fff" />} titulo={t("Oracle Database 12c: Install and Upgrade")} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardGestao2 img={<FaCertificate color="#fff" />} titulo={t("Oracle Database 11g Administrator Certified Associate")} />
                    </SwiperSlide>
                </Swiper>
            </div>

        </section>
    )
}