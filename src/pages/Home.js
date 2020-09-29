import React from 'react'
//importamos los componentes
import './styles/Home.css'
import TopPost from '../components/TopPost'
import Emoji from '../components/emojiSymbol'

class Home extends React.Component {
    render() {
        return(
            <div className="home">
                <h1>Todo para el Streaming</h1>
                <p>
                    Si entraste en esta web te interesa saber como <b>empezar a hacer streaming,</b> <span>mejorar la calidad de tu streamin</span>, ver <b>cuales son las mejores herramientas para tranmitir online</b>, ¿como iniciar en youtube live o twich?, aprender a <span>stremear live o ondemand</span> y encontrar los mejores gatges y <b>accesorios para hacer streaming</b>, o hacer que tu contenido luzca de una forma profecional
                </p>
                <TopPost />
                <div className="guiaDeStreamin">
                    <h2>
                        <Emoji symbol="🟢" label="green-circle"/> Guia rapida para hacer streaming profecional <Emoji symbol="✔️" label="check"/> 2020 <Emoji symbol="✔️" label="check"/>
                    </h2>
                    <article>
                        <h3><Emoji symbol="🎥" label="movie-camera" />¿como escojer una plataforma para hacer streaming?<Emoji symbol="🖥️" label="pc" /></h3>
                        <p className="article-content">
                            para hacerlo primero debemos es saber el tipo de contenido que quermos hacer y la forma en la que lo queremos que las personas lo consuman. aqui veras una breve descripcion y escoje que te ayudara a escojer un tipo
                        </p>
                        <ul className="streaming-type">
                            <li>
                                <p>
                                    <b>Streaming live</b>: Se transmite en tiempo real o con breves retrasos, el contenido es mas dinamico pero las plataformas no nos ofrecen la posibilidad de grabarlo lo cual es una ventaja si deseas que el contenido no este disponible luego.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <b>Streaming onDemand</b>: es el mas comun le permite al consumidor ver el contenido cuando lo desee y es almacenado por la plataforma.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <b>Streaming Hibrido</b>: Nos permite generar contenido fresco con la opcion de interactuar en vivo con las personas a la vez que se queda grabado para ser visto mas tarde en la plataforma que escojamos.
                                </p>
                            </li>
                        </ul>
                    </article>
                </div>
            </div>
        )
    }
}

export default Home;