import React from 'react'
import '../css/CHs2020.css'
import Picture from '../Picture'
import Emoji from '../emojiSymbol'
//importamos las imagenes necesarias aqui abajo
import webp1 from '../../images/comohacerstreaming1webp.webp'
import jpg1 from '../../images/comohacerstreaming1.JPG'
//importamos el segundo par de imagenes
import webp2 from '../../images/openBroadcasterWebp.webp'
import jpg2 from '../../images/openBroadcasterJPG.JPG'
//importamos el tercer par de imagenes
import paso1png from '../../images/paso1.png'
import paso1webp from '../../images/paso1webp.webp'
//imortamos las imagenes del paso 2
import paso2png from '../../images/paso2.png'
import paso2webp from '../../images/paso2webp.webp'
//importamos las imagenes del paso 3
import paso3png from '../../images/paso3.PNG'
import paso3webp from '../../images/paso3webp.webp'
//importamos las imagenes con el paso4
import paso4png from '../../images/paso4.PNG'
import paso4webp from '../../images/paso4webp.webp'


function ComHacerStreaming2020() {
    return(
        <React.Fragment>
            <article>
                <h2>
                    <Emoji symbol="🤯" label="Exploding-Head"/>
                        ¿Como hacer streaming 2020?
                    <Emoji symbol="🤯" label="Exploding-Head"/>
                </h2>
                <Picture src={webp1} srcFallback={jpg1} alt="haciendo streaming en pc" />
                <p>
                    En esta guía aprenderás a hacer streaming con una herramienta llamada OBS,  aprenderás a usarla y configurarla a tus preferencias para hacer streaming como un profesional, así que comencemos.
                </p>
                <Picture src={webp2} srcFallback={jpg2} alt="open broadcaster para hacer streamin, como configurarlo" />
                <p>
                    <Emoji symbol="🤪" label="Zany-face" /> hay tres cosas que debemos tener en cuenta a la hora de hacer streaming:  el internet que tengamos contratado, la potencia de la pc  y la configuración del software. 
                    Puede que tengamos problemas si nuestro internet no es lo bastante bueno o nuestra pc no es lo suficientemente potente, en todo caso si configuramos bien OBS el internet y la pc no deberían de ser problema. es muy importante que conozcamos las limitaciones de nuestro ordenador ya que es en el donde vamos a correr los programas y aplicaciones para hacer la transmision del streaming<Emoji symbol="🤪" label="Zany-face" /><Emoji symbol="🤪" label="Zany-face" />
                </p>
                <p>
                <Emoji symbol="😎" label="face-with-sunglasses" />Para empezar con la configuración debemos descargar el OBS con este link <a href="https://obsproject.com/es" target="BLANK">https://obsproject.com/es</a><Emoji symbol="😎" label="face-with-sunglasses" />
                </p>
                <p>
                    Una vez descargado e instalado Procedemos a <span>configurar el OBS para que funcione optimo</span> 
                </p>
                <p>
                    <Emoji symbol="🟢" label="grenn-circle"/> <b>Paso 1:</b> comencemos configurando la cantidad de bitrate que necesitas para hacer streaming, abrimos OBS y nos vamos a ajustes salida y en el apartado emisión ponemos los bitrates necesarios. Si no sabes cuantos bitrates necesitas los mas recomendado es 900 pero puede mover el valor segun la velocidad de tu internet
                </p>                            
                <Picture src={paso1webp} srcFallback={paso1png} alt="como los pixeles del OBS para hacer streaming"/>
                <Picture src={paso2webp} srcFallback={paso2png} alt="como configurar el bitraje para hacer streaming"/>
                <p>
                <Emoji symbol="🟢" label="grenn-circle"/> <b>Paso 2 Pixeles:</b>esto mezclado con los el numero de pixeles. para el numero de pixeles te recomendamos que uses la nativa de tu ordenador, pero puedes experimentar con la conexion de tu red para ver cual es la mas soportada, puedes probar con una resolucion de <b>1440x900</b> o una <b>1280x720</b> y si la conexion es lo suficientemente estable con una de <b>1920X108</b>. Por lo general se recomienda un bitraje de 900 tomando en cuenta que algunos quieren <span>hacer streaming de Fornite</span>, o de otros battle Royales que requieren una buena cantidad de pixeles para dar una buena calidad de imagen.
                </p>
                <Picture src={paso3webp} srcFallback={paso3png} alt="la mejor configuracion de resolucion para hacer streaming con OBS"/>
                <p>
                    <Emoji symbol="😜" label="winking-face"/> otro punto importante es que el apartado de video tambien puede configurar los fps de las transmision<Emoji symbol="😜" label="winking-face"/>
                </p>
                <p>
                    <Emoji symbol="🟢" label="grenn-circle"/> <b>Paso 3 Transmision del Streaming:</b> ahora vamos al apartado de Emision y selecionamos la plataforma en la que queremos hacer streaming, nos logeamos con nuestras credenciales y listo empezamos a transmitir
                </p>
                <Picture src={paso4webp} srcFallback={paso4png} alt="como configurar la emision del OBS para YouTube LIVE Twich y otras plataformas"/>
                <p>
                    <Emoji symbol="🤓" label="Nerd-Face" /> Listo ya tenemos nuestro <span><b>OBS configurado para hacer streaming en Twich</b></span> o  cualquier otra plataforma de nuestra preferencia <Emoji symbol="🤓" label="Nerd-Face"/>
                </p>
            </article>
        </React.Fragment>
    )
}

export default ComHacerStreaming2020