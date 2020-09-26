import React from 'react'
import './css/navbar.css'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className="nav_element">
            <div className="nav-container">
                <nav className="navbar-selector">
                    <h1> 
                        <Link to="/">
                            Todo para streaming
                        </Link>
                    </h1>
                    <div className="brand">
                        <Link to="/">
                            <p className="brand-title">Home</p>
                        </Link>
                    </div>
                    <div className="navbar-options">
                        <Link to="/articulos-para-streaming">
                            <p>Productos</p>
                        </Link>
                        <Link to="/blogs-y-tutoriales">
                            <p>Blog</p>
                        </Link>
                        <Link to="/categorias">
                            <p>Categorias</p>
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar;