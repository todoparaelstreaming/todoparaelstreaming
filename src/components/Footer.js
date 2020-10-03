import React from 'react'
import './css/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return(
        <React.Fragment>
            <div className="footer-full">
                <div className="footer-container">
                    <div className="colum">
                        <ul>
                            <li>
                                <Link to="/politica-de-privacidad">
                                    Politicas de Privacidad
                                </Link>
                            </li>
                            <li>
                                <Link to="/politicas-de-cookies">
                                    Politicas de Cookies
                                </Link>
                            </li>
                            <li>
                                <Link to="/about-us">
                                    about us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact-us">
                                    Contactanos
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="colum">
                        <ul>
                            <li>
                                <a href="https://www.facebook.com" target="BLANK">
                                    facebook
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com" target="BLANK">
                                    twitter
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com" target="BLANK">
                                    instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="slogan">
                    <p>
                        Buscamos lo mejor para tu streaming
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer