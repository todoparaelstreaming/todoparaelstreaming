import React from 'react'
//importamos los componentes
import './styles/Home.css'
import TopPost from '../components/TopPost'
import Emoji from '../components/emojiSymbol'
import GuiaRapida from '../components/guiaRapida'
import AmazonBanner from '../components/amazonBanner'

class Home extends React.Component {
    render() {
        return(
            <div className="home">
                <h1>Todo para el Streaming</h1>
                <p>
                    Si entraste en esta web te interesa saber como <b>empezar a hacer streaming,</b> <span>mejorar la calidad de tu streamin</span>, ver <b>cuales son las mejores herramientas para tranmitir online</b>, ¿como iniciar en youtube live o twich?, aprender a <span>stremear live o ondemand</span> y encontrar los mejores gatges y <b>accesorios para hacer streaming</b>, o hacer que tu contenido luzca de una forma profecional
                </p>
                <TopPost />
                <AmazonBanner 
                    link="https://amzn.to/36mJHao"
                    alt="hola esto es la imagen"
                    productTitle="capturadora HDMI"
                    description={[
                        "hola 1",
                        "hola segundo portatil",
                        "solo agragando texto",
                        "mas texto solo por diversion"
                    ]}
                    imgSrc="https://images-na.ssl-images-amazon.com/images/I/51zHw-6vMJL._AC_SL1171_.jpg"
                />
                <div className="guiaDeStreamin">
                    <h2>
                        <Emoji symbol="🟢" label="green-circle"/> Guia rapida para hacer streaming profecional <Emoji symbol="✔️" label="check"/> 2020 <Emoji symbol="✔️" label="check"/>
                    </h2>
                    <article>
                        <GuiaRapida />
                    </article>
                </div>
            </div>
        )
    }
}

export default Home;