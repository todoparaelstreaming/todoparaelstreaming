import React from 'react'
//importamos los componentes
import './styles/Home.css'
import TopPost from '../components/TopPost'
import Emoji from '../components/emojiSymbol'
import GuiaRapida from '../components/guiaRapida'
import AmazonBanner from '../components/amazonBanner'
import HeadTags from '../components/HeadTags'

class Home extends React.Component {
    render() {
        return(
            <React.Fragment>
                <HeadTags 
                    metaTitle="Todo para el streaming"
                    pageTitle="ese es uno que no se sobre escribe"
                />
                <div className="home">
                    <h1>Todo para el Streaming</h1>
                    <p>
                        Si entraste en esta web te interesa saber como <b>empezar a hacer streaming,</b> <span>mejorar la calidad de tu streamin</span>, ver <b>cuales son las mejores herramientas para tranmitir online</b>, ¿como iniciar en youtube live o twich?, aprender a <span>stremear live o ondemand</span> y encontrar los mejores gatges y <b>accesorios para hacer streaming</b>, o hacer que tu contenido luzca de una forma profecional
                    </p>
                    <TopPost />
                    <AmazonBanner 
                        link="https://amzn.to/36mJHao"
                        alt="hola esto es la imagen"
                        productTitle="Elgato Game Capture HD, Xbox y PlayStation Grabadora de juegos de alta definición para Mac y PC"
                        description={[
                            "1080p 60fps Capture",
                            "Vision instantanea del Juego \"Instant Game View\" ",
                            "Captura ilimitada",
                            "Max Bitraje 40Mbps",
                            "Interface: USB 3.0"
                        ]}
                        imgSrc="https://images-na.ssl-images-amazon.com/images/I/51zHw-6vMJL._AC_SL1171_.jpg"
                        rebaja={true}
                        priceTag="150"
                    />
                    <div className="guiaDeStreamin">
                        <h2>
                            <Emoji symbol="🟢" label="green-circle"/> Guia rapida para hacer streaming profesional <Emoji symbol="✔️" label="check"/> 2020 <Emoji symbol="✔️" label="check"/>
                        </h2>
                        <article>
                            <GuiaRapida />
                        </article>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;