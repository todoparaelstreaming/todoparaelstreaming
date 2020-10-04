import React from 'react'
//importamos los componentes
import './styles/Home.css'
import TopPost from '../components/TopPost'
import Emoji from '../components/emojiSymbol'
import GuiaRapida from '../components/articulos/guiaRapida'
import AmazonBanner from '../components/amazonBanner'
import HeadTags from '../components/HeadTags'
import Capturadoras from '../components/articulos/Capturadoras'

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
                        alt="la mejor capturadora para streaming gamer en twitch"
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
                    <AmazonBanner 
                        link="https://amzn.to/34nydRl"
                        alt="stream deck para streaming multicamara y aplicaciones"
                        productTitle="Elgato Stream Deck - Live Content Creation Controller with 15 Customizable LCD Keys"
                        description={[
                            "15 teclas LCD: Presiona para cambiar la ventana, Lanzar medios, ajustar audio y mucho mas",
                            "100% cutomizable: Personaliza las teclas con tus propias imagenes o escoje entre las 100 de imagenes precargadas",
                            "Integracion Directa: Control game capture, OBS, XSplit, TipeeeStream, Twitch, YouTube, Mixer, y Mas",
                            "Facil de Configurar: Simplemente arrastra y suelta la configuracion en los espacios en la app",
                            "Control Ilimitado: Guardas carpetas y anida tantas configuraciones como puedas"
                        ]}
                        imgSrc="https://images-na.ssl-images-amazon.com/images/I/710R9YpV9nL._AC_SL1500_.jpg"
                        rebaja={true}
                        priceTag="149.99"
                    />
                    <Capturadoras />
                </div>
            </React.Fragment>
        )
    }
}

export default Home;