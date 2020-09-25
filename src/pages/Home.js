import React from 'react'
//importamos los componentes
import './styles/Home.css'
import TopPost from '../components/TopPost'

class Home extends React.Component {
    render() {
        return(
            <div className="home">
                <h1>Todo para el Streaming</h1>
                <p>
                    Si entraste en esta web te interesa saber como <b>empezar a hacer streaming,</b> <span>mejorar la calidad de tu streamin</span>, ver <b>cuales son las mejores herramientas para tranmitir online</b>, ¿como iniciar en youtube live o twich?, aprender a <span>stremear live o ondemand</span> y encontrar los mejores gatges y <b>accesorios para hacer streaming</b>
                </p>
                <TopPost />
            </div>
        )
    }
}

export default Home;