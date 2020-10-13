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
            </article>
        </React.Fragment>
    )
}

export default ComHacerStreaming2020