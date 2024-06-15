import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom'
import "./style.css"

export default function BotaoWhats() {
    return(
        <div className="container-whats">
            <Link className="link-whats" target="blank"  to='https://api.whatsapp.com/send?phone=5527995338782'><FaWhatsapp className="img" /></Link>
        </div>
    )
}