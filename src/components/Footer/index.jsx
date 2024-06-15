import React , {useState} from 'react';
import { Link } from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa";
import "./styles.css"
import "../../utils/i18n.js"
import { useTranslation } from "react-i18next"

export default function Footer() {

    const { t } = useTranslation();

    const [modal, setModal] = useState(false)

    const clikaModel = () => {
        setModal(!modal)
    }

    return (
        <section className="footer">
            <div className="endereco">
                <h4>{t("Endereço")}</h4>
                <p>{t("Rua Sete, 80")}<br /> {t("Vila Velha 29102380, BR")}</p>
                <a href="mailto:comercial@bsldatasecurity.com">comercial@bsldatasecurity.com</a>
            </div>

            <div className="sigaNos">
                <div className='politica'>
                    <p>© 2024 BSL <span>{t("Política de Privacidade")}</span></p>
                </div>

                <div className='Boxicone'>
                    <Link className='cardimg' target='blank' to='https://www.linkedin.com/company/bsl-data-security/'>
                        <FaLinkedin className='icone' />
                    </Link>
                    <Link className='cardimg' target='blank' to='https://www.instagram.com/bsldatasecurity/'>
                        <img className='insta' src="assets/insta.png" alt="" />
                    </Link>
                </div>
            </div>

            <div className="desenvolvido">
                <p>{t("Desenvolvido por ")}<Link className='nome' to='https://api.whatsapp.com/send?phone=5527998673933'>Kayro Rocha</Link></p>
            </div>
        </section>
    )
}
