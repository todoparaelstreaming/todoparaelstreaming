import React, { useState } from 'react'
import './css/navbar.css'
import { Link } from 'react-router-dom'

function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    const openClose = () => {
        if (isOpen) {
            setIsOpen(false)
        }
        else {
            setIsOpen(true)
        }

        console.log(isOpen)
    }

    const isOpenAct = () => {
        var setOpenClass = "isOpen"
        if (isOpen) {
            return setOpenClass
        }
        else {
            return ""
        }
    }

    return (
        <div className="nav_element">
            <div className="nav-container">
                <nav className="navbar-selector">
                    <h1 className="phoneTitle"> 
                        <Link to="/">
                            Todo para streaming
                        </Link>
                    </h1>
                    <div className="brand">
                        <Link to="/">
                            <p className="brand-title">Home</p>
                        </Link>
                    </div>
                    <div className={`navbar-options ${isOpenAct()}`} onClick={() => (setIsOpen(false))}>
                        <Link to="/articulos-para-streaming">
                            <p>Productos</p>
                        </Link>
                        <Link to="/blogs-y-tutoriales">
                            <p>Blog</p>
                        </Link>
                        <Link to="/guia-completa-para-hacer-streaming-gamer-2020">
                            <p>Guia de Streaming</p>
                        </Link>
                    </div>                    
                    <div className="phone-nav-element" onClick={openClose}>
                        {isOpen && <i className="fas fa-arrow-circle-up"></i>}
                        {!isOpen && <i className="fas fa-arrow-circle-down"></i>}
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar;