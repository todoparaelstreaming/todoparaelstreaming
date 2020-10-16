import React from 'react'
import Emoji from '../emojiSymbol'
import { Link } from 'react-router-dom'
import '../css/guiaRapida.css'

function GuiaRapida() {
    return(
        <div className="guia-rapida" id="guia-rapida">
            <h3>
                <Emoji symbol="🎥" label="movie-camera" />
                    ¿como escojer una plataforma para hacer streaming?
                <Emoji symbol="🖥️" label="pc" />
            </h3>
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
                        <b>Streaming Hibrido</b>: Nos permite generar contenido fresco con la opcion de interactuar en vivo con las personas a la vez que se queda grabado para ser visto mas tarde en la plataforma que escojamos. Tambien nos permite tener varios participantes que estan en locaciones remotas.
                    </p>
                </li>
            </ul>
            <h3>
                Plataformas de Streaming para video
            </h3>
            <p className="article-content">
                Si lo que deseas es transmitir video en vivo o onDemand estas son las <b>plataformas principales de streaming en video</b>, para que puedas escojer una segun se adapte a tus necesidades 
            </p>
            <ul className="streaming-type">
                <li>
                    <p>
                        <b>Youtube</b>: Una de las principales de hoy ya que nos permite subir videos para luego ser vistos cuando al usuario le guste. tambien cuenta con la opcion de hacer lives con un chat interactivo en tiempo real y la ventaja de <span>grabar el streaming</span> para ser visto luego.
                    </p>
                </li>
                <li>
                    <p>
                        <b>Twitch</b>: Esta es una plataforma muy confiable que nos ayuda a la hora de <b>Monetizar nuestro canal Streaming</b>, a la vez que incluye multiples <b>opciones para personalizar nuestro chat</b> y mejorar la interaccion con quienes vean nuestro contenido. otra ventaja de Twitch es que tambien se graba el Streaming para que lo puedas ver despues.
                    </p>
                </li>
                <li>
                    <p>
                        <b>Vimeo</b>: si bien no es de las mas conocidas ni usadas nos permite subir video onDemand a la plataforma, a demas de su rapida conexion es una buena opcion si lo que quieres es usarlo como <span><b>hosting de video para tu pagina web</b></span>, ya que puedes utilizar la plataforma de video embebido para ser reproducido en tu pagina web personal, redes sociales y demas.
                    </p>
                </li>
            </ul>
            <h3>
                <Emoji symbol="💻" label="laptop" />
                    <span>¿que programa usar para hacer streaming?</span>
                <Emoji symbol="💻" label="laptop" />
            </h3>
            <p className="article-content">
                para esta guia rapida usaremos <a href="https://obsproject.com" target="BLANK">OBS</a> ya que nos permite realizar una configuracion rapida para hacer <b>Streaming en multiples plataformas</b>. Visita nuestro articulo <Link to="/blogs-y-tutoriales/como-hacer-streaming-en-Twitch-con-obs">¿como hace streaming en Twitch con obs?</Link>
            </p>
            <p className="article-content">
                OBS es una herramienta gratuita que nos permite setear nuestra estacion de streaming en pocos minutos. a demas de ayudarnos a elegir la calidad de imagen, la calidad de audio y muchas otras configuraciones avanzadas que puedes aprender en el <Link to="/curso-completo-de-obs">curso completo de OBS</Link>.
            </p>
            <h3>
                <Emoji symbol="⏳" label="sand-watch-1" />
                    ¿Que ancho de banda requiero para hacer streaming?
                <Emoji symbol="⌛" label="sand-watch-2" />
            </h3>
            <p className="article-content">
                Para calcular el <b>ancho de banda requerido para hacer streaming en Twitch</b>, Youtube o cualquier otra plataforma debemos tomar en cuanta factores como el ping y el ancho de banda de subida, lo ideal es tener una velocidad de subida mayor a 10Mb de velocidad. Otro factor a tomar en cuenta que la velocidad de conexion sea simetrica ya que talvez algunas aplicaciones que esten activa nos puedan robar conexion. A continuacion una lista de las velocidades minimas requeridas para Twitch y youtube segun el numero de pixeles ya testeadas.
            </p>
            <ul className="streaming-type">
                <li>
                    <p>
                        <b>720p de video y 120khz de sonido</b>: 2Mb de subida unicamente dedicado para la app
                    </p>
                </li>
                <li>
                    <p>
                        <b>720p 60fps 320khz</b>: 8Mb de subida dedicados para la apicacion
                    </p>
                </li>
                <li>
                    <p>
                        <b>1080p 60fps 320khz</b>: 12Mb de subida dedicados para el OBS
                    </p>
                </li>
                <li>
                    <p>
                        <b>Cualquier otra calidad de video y sonido</b>: Recomendamos 20Mb para que el video sea optimo sin embargo se puede setear el OBS y otros temas en la pc que usemos para que el video sea mas fluido.
                    </p>
                </li>
            </ul>
            <p className="article-content">
                <Emoji symbol="🤔" label="thinking-face" /><Emoji symbol="🤔" label="thinking-face" /><b>Nota importante</b>, la calidad de sonido maxima que esta disponible en twitch es de 120khz, aunque algunos progamas para hacer streaming nos permite forzar la calidad de audio. No es recomendable hacer esto a menos que la calidad de audio sea lo principal en el contenido que quieres poner online <Emoji symbol="🤓" label="nerd-face" />.
            </p>
            <p className="article-content">
                Para entender todo al maximo y hacer streaming de una manera profesional revisa la <Link to="/guia-completa-para-hacer-streaming-profecional-en-twitch">Guia completa para hacer un streaming profecional</Link>. tambien puedes revisar nuestros <Link to="/blogs-y-tutoriales">tutoriales para hacer streaming</Link>
                <Emoji symbol="👏" label="claps" /><Emoji symbol="👏" label="claps" /><Emoji symbol="👏" label="claps" />
            </p>
        </div>
    )
}

export default GuiaRapida