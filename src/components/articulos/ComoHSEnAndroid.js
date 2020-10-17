import React from 'react'
//importamos los componentes necesarios
import AmazonBanner from '../amazonBanner'
import Emoji from '../emojiSymbol'
import Picture from '../Picture'
//aqui abajo importaremos las imagenes
import StreamLabJpg from '../../images/streamLabsCompress.jpg'
import StreamLabWebp from '../../images/streamLabsCompressWebp.webp'
import ASpaso1Jpg from '../../images/ASpaso1.jpg'
import ASpaso1Webp from '../../images/ASpaso1Webp.webp'
import ASpaso2 from '../../images/ASpaso2.jpg'
import ASpaso2Webp from '../../images/ASpaso2Webp.webp'
import ASpaso3 from '../../images/ASpaso3.jpg'
import ASpaso3Webp from '../../images/ASpaso3Webp.webp'
import ResultadoJpg from '../../images/AS-resultado.jpg'
import ResultadoWebp from '../../images/AS-resultadoWebp.webp'
//importamos el css
import '../css/CHSenAndroid.css'

function ComoHSEnAndroid() {
    return(
        <div className="articleContainer-and">
            <article>
                <h3>
                    <Emoji symbol="🍕" label="Pizza" />
                    <Emoji symbol="🍕" label="Pizza" />
                            ¿Como hacer streaming en android con StreamLab 2020?
                    <Emoji symbol="🍕" label="Pizaa" />
                    <Emoji symbol="🍕" label="Pizza" />
                </h3>
                <Picture src={StreamLabWebp} srcFallback={StreamLabJpg} alt="como usar streamlab para hacer streaming en twicht" />
                <p>
                    en esta <b>guia de streaming básico para teléfonos android</b> te enseñaremos a hacerlo como todo un profesional usando Streamlabs. aqui te enseñaremos a usar y configurar a tu gusto streamlabs para que hagas streaming como todo un profesional asi que comencemos:
                </p>
                <p>
                    para empezar descarguemos <span>StreamLab</span> desde la PlayStore. Ya una vez descargado vamos al paso 1. iniciamos sesion con nuestra <b>cuenta de Twitch, Youtube, Facebook, Mixer o cualquier otra aplicacion que querramos usar para hacer streaming</b>
                </p>
                <Picture src={ASpaso1Webp} srcFallback={ASpaso1Jpg} alt="configurar streamlab para hacer streaming en youtube" />
                <p>
                    <Emoji symbol="🥑" label="Aguacate" />  
                    <Emoji symbol="🥑" label="Aguacate" />
                    <b> Paso 2 Configurar las Herraminetas de StreamLab:</b> una vez que hayamos iniciado sesión con nuestra aplicación de streaming favorita nos aparecerá una lista de herramientas para nuestro streaming como por ejemplo la barra de alertas (para saber quien se a conectado al streaming), la barra de chat (para ver el chat en la pantalla) y el ticker de donaciones (para saber quien te a donado dinero y cuanto a donado).
                </p>
                <Picture src={ASpaso2Webp} srcFallback={ASpaso2} alt="Como configurar las herramientas de streamlab para twitch" />
                <p>
                    <Emoji symbol="🌮" label="taco" />
                    <Emoji symbol="🌮" label="taco" />
                    <b> Paso 3 Configurar los Widgets de StreamLab:</b> luego de esto nos dirá si le damos acceso al micrófono y a la cámara del telefono, le damos permitir a los dos para que podamos grabarnos y hablar. ahora si le damos a editor podemos ver donde queremos que esté ubicado en la pantalla las herramientas que mencionadas anteriormente, también podemos ver de que tamaño queremos que aparezcan en pantalla.
                </p>
                <Picture src={ASpaso3Webp} srcFallback={ASpaso3} alt="la mejor configuracion para hacer streaming en android 2020" />
                <p>
                    Ahora veamos otras <span>opciones que tiene Stream Lab</span>
                </p>
                <ul>
                    <li>
                        <p>
                            tenemos opciones como el orient que sirve para poner la orientación en la que queremos grabar (consejo: nunca grabes en vertical), otra buena opcion es el alert profiles qué es para poner tus temas o perfiles que tengas, <b>el remote control es otra buena herramienta qué se usa para un stream deck o para activar el streaming de forma remota con un QR.</b>
                        </p>
                    </li>
                </ul>
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
                <ul>
                    <li>
                        <p>
                            <Emoji symbol="🥟" label="Dumpling" />
                            <Emoji symbol="🥟" label="Dumpling" />
                            por último tenemos el setting donde podemos <b>cambiar algunas opciones como las preferencias de Twitch:</b> primero tenemos el ingest server que es para elegir el servidor desde donde queremos transmitir.
                        </p>
                    </li>
                    <li>
                        <p>
                            <Emoji symbol="🍿" label="popcorn" />
                            <Emoji symbol="🍿" label="popcorn" />
                            <b>hide viewer count</b> es para poner o quitar la barra que te dice la cantidad de personas que te están viendo.
                        </p>
                    </li>
                    <li>
                        <p>
                            <Emoji symbol="🥗" label="salad" />
                            <Emoji symbol="🥗" label="salad" />
                            <b>bandwidth test mode</b> es para hacer un streaming de prueba sin que se lanze a la plataforma de streaming que uses y poder comprobar la velocidad con la que te esta conectando y que todo es andando correctamente.
                        </p>
                    </li>
                    <li>
                        <p>
                            <Emoji symbol="👏" label="clapping" />
                            <Emoji symbol="👏" label="clapping" />
                            <Emoji symbol="👏" label="clapping" />
                            <b>enable in-app chat</b> es para activar o desactivar el chat en tiempo real en tu pantalla.
                        </p>
                    </li>
                    <li>
                        <p>
                            <Emoji symbol="🍣" label="sushi" />
                            <Emoji symbol="🍣" label="sushi" />
                            <b>show chat head bubble</b>  es para poner o no poner el chat mientras estás en un juego.
                        </p>
                    </li>
                    <li>
                        <p>
                            <Emoji symbol="🌶️" label="pepper" />
                            <Emoji symbol="🌶️" label="pepper" />
                            <b>hide chat timeout</b> es para poner el tiempo que tiene que pasar para que el chat se quite despues del ultimo comentario.
                        </p>
                    </li>
                    <li>
                        <p>
                            <Emoji symbol="🥭" label="mango" />
                            <Emoji symbol="🥭" label="mango" />
                            <b>show chat emotes</b> es para mostrar los emoticones que las personas pueden poner en el chat.
                        </p>
                    </li>
                    <li>
                        <p>
                            <Emoji symbol="🌭" label="hotdogs" />
                            <Emoji symbol="🌭" label="hotdogs" />
                            <b>extra size for chat text</b> es para poner un cuadro de chat muy grande en el caso de los teléfonos con pantallas muy grandes.
                        </p>
                    </li>
                    <li>
                        <p>
                            <Emoji symbol="🍔" label="Hamburger" />
                            <Emoji symbol="🍔" label="Hamburger" />
                            también tenemos el broadcast donde podemos poner nuestras <b>preferencias de fps calidad de video y bitrate</b> (el bitrate mas recomendado son 900p o en movil 1000p).
                        </p>
                    </li>
                    <li>
                        <p>
                            <Emoji symbol="🍟" label="French-fries" />
                            <Emoji symbol="🍟" label="French-fries" />
                            luego tenemos la configuración del audio. y por ultimo la configuración avanzada (consejo: si no sabes mucho de eso dejalo como esta) <b>aqui podemos cambiar la configuración de otra aplicación de streaming que no esté afiliada a streamlabs.</b> 
                        </p>
                    </li>
                </ul>
                <Picture src={ResultadoWebp} srcFallback={ResultadoJpg} alt="Streaming profecional en twitch con streamlab" />
                <p>
                    <Emoji symbol="🌯" label="burrito" />
                    <Emoji symbol="🌯" label="burrito" />
                    bueno ahora si ya puedes hacer streaming con tu teléfono android como un profesional acá abajo te dejo un par de cosas que te pueden ayudar a hacer streaming desde tu teléfono.
                </p>
                <AmazonBanner
                    link="https://amzn.to/3dzCS6V"
                    alt="Flydigi Apex Wireless Controller, RGB Lighting Gamepad. Color del producto: Color blanco. Soporte para Android, tableta, TV Box, PC, Gamepad de vapor, no compatible con iOS 13.4 y superior."
                    productTitle="Flydigi Apex Wireless Controller, RGB Lighting Gamepad"
                    description={[
                        "Transmisión inalámbrica: Bluetooth 4.0 y 2.4 G transmisión inalámbrica. Compatible con Android Tablet PC Windows TV Box. No es compatible con iOS 13.4.",
                        "Múltiples botones y modo de brillo: Apex tiene un total de 23 botones de función y cuatro tipos de modos de luz. Crea un controlador único para ti. Botón trasero y botones CZ pueden ser compatibles para juegos móviles",
                        "Vibración del motor y balancín: las empuñaduras izquierda y derecha tienen motores asimétricos integrados y utilizan balancín ALPS japonés para una experiencia de juego más realista.",
                        "Soporte portátil: el soporte puede satisfacer las necesidades de estiramiento y desmontaje en cualquier momento. Adecuado para teléfonos móviles de 3.5 in a 6.7 in."
                    ]}
                    imgSrc="https://images-na.ssl-images-amazon.com/images/I/41KByDXEABL._AC_.jpg"
                    rebaja={true}
                    priceTag="58.99"
                />
            </article>
        </div>
    )
}

export default ComoHSEnAndroid
//<Emoji symbol="" label="" />