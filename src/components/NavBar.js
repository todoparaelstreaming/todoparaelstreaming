import React from 'react'
import './navbar.css'
import {BrowserRouter as Router, Link} from 'react-router-dom'

function NavBar() {
    return (
        <Router>
            <div className="nav_element">
                <div className="nav-container">
                    <nav className="navbar-selector">
                        <div className="brand">
                            <Link to="/">
                                <p className="brand-title">Home</p>
                            </Link>
                        </div>
                        <div className="navbar-options">
                            <Link to="/articulos">
                                <p>Articulos</p>
                            </Link>
                            <Link to="/blogs">
                                <p>Blog</p>
                            </Link>
                            <Link to="/categorias">
                                <p>Categorias</p>
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </Router>
    )
}

export default NavBar;