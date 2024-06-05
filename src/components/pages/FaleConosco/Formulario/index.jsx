import React from "react";
import "./styles.css"
import emailjs from "@emailjs/browser"

import "../../../../utils/i18n"
import { useTranslation } from "react-i18next"

export default function SecaoForm() {

    const { t } = useTranslation();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_3xhpz4b', 'template_vd9kvgc', e.target, "P38QpSxIEkRmCv5Po")
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
                e.target.reset()
            );
    };

    return (
        <section className="fundoform">
            <div className="divform">
                <h1>{t("Fale comigo!")}</h1>

                <form className="form" onSubmit={sendEmail}>
                    <label>{t("Nome completo")}</label>
                    <input
                        className="input"
                        required
                        type="text"
                        placeholder="Digite seu nome"
                        name="from_name"
                    />
                    <label>{t("Email")}</label>
                    <input
                        className="input"
                        required
                        type="text"
                        placeholder="Digite seu email"
                        name="email"
                    />
                    <label>{t("Assunto")}</label>
                    <textarea
                        className="textarea"
                        required
                        placeholder="Digite sua mensagem..."
                        name="message"
                    />

                    <input className="button" type="submit" value="Enviar" />
                </form>
            </div>
        </section>
    )
};

