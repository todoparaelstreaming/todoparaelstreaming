import React from 'react'
import '../css/Capturadoras.css'
import Emoji from '../emojiSymbol'
import AmazonBannerRow from '../amazonBannerRow'
import { Link } from 'react-router-dom'

function Capturadoras() {
    return(
        <React.Fragment>
            <h3>
                <Emoji symbol="💪" label="arm" />
                Mejores Marcas de capturadoras Gamers
                <Emoji symbol="💪" label="arm" />
            </h3>
            <div className="capturadoras-marcas-container">
                <div className="capturadoras-marcas mb1">
                    <div className="marca-name">
                        <p>Corsair - EL Gato <Emoji symbol="🦏" label="rino" /></p>
                    </div>
                </div>
                <div className="capturadoras-marcas mb2">
                    <div className="marca-name">
                        <p>QGeeM Capturadora <Emoji symbol="🦏" label="rino" /></p>
                    </div>
                </div>
                <div className="capturadoras-marcas mb3">
                    <div className="marca-name">
                        <p>AVerMedia CaptureCards<Emoji symbol="🦏" label="rino" /></p>
                    </div>
                </div>
                <div className="capturadoras-marcas mb4">
                    <div className="marca-name">
                        <p>LinkStable <Emoji symbol="🦏" label="rino" /></p>
                    </div>
                </div>
                <div className="capturadoras-marcas mb5">
                    <div className="marca-name">
                        <p>MiraBox <Emoji symbol="🦏" label="rino" /></p>
                    </div>
                </div>
                <div className="capturadoras-marcas mb6">
                    <div className="marca-name">
                        <p>seAAN <Emoji symbol="🦏" label="rino" /></p>
                    </div>
                </div>
                <div className="capturadoras-marcas mb7">
                    <div className="marca-name">
                        <p>Pengo Capturadoras <Emoji symbol="🦏" label="rino" /></p>
                    </div>
                </div>
                <div className="capturadoras-marcas mb8">
                    <div className="marca-name">
                        <p>Razer Ripsaw<Emoji symbol="🦏" label="rino" /></p>
                    </div>
                </div>
            </div>
            <div className="capturadoras-article">
                <article>
                    <h3>
                        <Emoji symbol="👉" label="Pointing Right" />
                            ¿Como escojer una capturadora para hacer Streaming?
                        <Emoji symbol="👈" label="Pointing Left" />
                    </h3>
                    <p className="capturadora-p">
                        si quieres <b>escojer una capturadora gamer</b> o una capturadora para grabar tu pantalla hay varios factores que debes de tomar en cuenta, y en este post te ayudare a <b>encotrar la capturadora perfecta para ti</b>.
                    </p>
                    <h4>
                        <Emoji symbol="✅" label="grenn-checkmark" />
                            Capturadoras portables para hacer Streaming
                        <Emoji symbol="✅" label="grenn-checkmark" />
                    </h4>
                    <p className="capturadora-p">
                        Esta el la <span>capturado mas comun para hacer streaming</span> ya que nos permite escojer la pantalla que queremos grabar es mas versatil si queremos usar consola, pc, laptop y en algunos modelos nos permite introducir un audio aparte como podria ser un mircrofono aparte. <b>estas son las mejores capturadoras portables</b>
                    </p>
                    <AmazonBannerRow 
                        products={[
                            {
                               "productLink": "https://amzn.to/3jxyG9P",
                               "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/51zHw-6vMJL._AC_SL1171_.jpg",
                               "imgAlt": "elgato hd60 stream recorder capturadora",
                               "productTitle": "Corsair Elgato HD 60FPS Streaming Capturadora",
                               "priceTags": "175.17",
                            },
                            {
                                "productLink": "https://amzn.to/3jxZ1Vb",
                                "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/61pWBRbG98L._AC_SL1500_.jpg",
                                "imgAlt": "Elgato Cam Link 4K capturadora usb gamer",
                                "productTitle": "Corsair el gato capturadora usb gamer 4k",
                                "priceTags": "129.99",
                             },
                             {
                                "productLink": "https://amzn.to/3ngbtLI",
                                "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/81LAKhfgQ4L._AC_SL1500_.jpg",
                                "imgAlt": "avermedia AVerMedia Live Gamer Portable 2 Plus, 4K Pass-Through",
                                "productTitle": "Avermedia Live Game Capturadora Portable para streaming en 4K",
                                "priceTags": "139.99",
                             },
                        ]}
                    />
                    <p className="capturadora-p">
                        Aqui arriba tenemos <b>las tres mejores capturadoras portables</b>, son la opcion optima para <span>hacer streaming en multiples plataformas</span> con una alta calidad. tambien podemos encontrar otras opciones mas economicas, pero esto significaria perder calidad de video, resolucion o cantidad de FPS ("Frames Per Second" o "Cuadros Por Segundo"). si esto no es lo mas importante o lo principal en el contenido que quieres subir tambien puedes optar por estas <span>capturadoras de video baratas</span>.
                    </p>
                    <AmazonBannerRow products={[
                        {
                            "productLink": "https://amzn.to/2GyDa1r",
                            "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/61Xp9ldrCfL._AC_SL1241_.jpg",
                            "imgAlt": "LEADNOVO Audio Video Capture Card, HDMI USB3.0 4K 1080P 60fps Reliable Portable Video Converter for Game Streaming Live Broadcasts Video Recording(Black)",
                            "productTitle": "Capturadora LEADNOVO USB3.0 para Broadcast Video",
                            "priceTags": "57.99"
                        },
                        {
                            "productLink": "https://amzn.to/33xTMzC",
                            "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/51e%2BGf5IMLL._AC_SL1000_.jpg",
                            "imgAlt": "PIHEN HDMI Video Capture Card, Gaming Recorder Card,1080P 60FPS HDMI to USB3.0 Video/Audio Capture Recorder Device,Compatible Windows Linux YouTube OBS OS X Twitch for PS3 PS4 Xbox One Xbox 360 ps5",
                            "productTitle": "PIHEN HDMI Capturadora de video para PS3, PS4, Xbox 360, Xbox One y mas",
                            "priceTags": "69.99"
                        },
                        {
                            "productLink": "https://amzn.to/36DvcPx",
                            "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/71cnMyLaShL._AC_SL1500_.jpg",
                            "imgAlt": "TDisplay Capture Card, 4K HDMI Game Capture Card to Live Streaming and Record, USB 3.0 Video and Audio Capture Device for Windows, MacOS, Linux, PS4, Nintendo Switch, Xbox One, Games, Broadcast Live",
                            "productTitle": "TDisplay capturadora 4k HDMI video para Streamin y Grabacion",
                            "priceTags": "69.99"
                        },
                        {
                            "productLink": "https://amzn.to/34rVUb9",
                            "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/71qZCLDoWiL._AC_SL1500_.jpg",
                            "imgAlt": "Game USB HDMI Capture Card, HD 1080P Video Capture Card Live Streaming Share for PS4 Nintendo Switch Wii U DSLR Xbox on OBS, XSplit, Twitch, YouTube Support Windows, Mac, Zero Latency HDMI Loopout",
                            "productTitle": "capturadora HDMI 1080P 60fps hdmi loop out",
                            "priceTags": "49.99"
                        },
                        {
                            "productLink": "https://amzn.to/2GEf9pS",
                            "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/61a0X-CfVmL._AC_SL1500_.jpg",
                            "imgAlt": "HDMI Audio Video Capture Card: High Definition 1080p 30fps - HDMI to USB2.0 - Video Recording via DSLR & Camcorder to Live Streaming | Gaming | Teaching | Live Broadcasting | Video Conference",
                            "productTitle": "HDMI video capturadora USB camrecorder",
                            "priceTags": "19.99"
                        },
                        {
                            "productLink": "https://amzn.to/33z5x8A",
                            "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/61dFjyeuMGL._AC_SL1500_.jpg",
                            "imgAlt": "KeeQii Capture Card, Full HD 1080P Video Capture Card, HDMI Capture Card Live Stream and Record, Compatible with PS4,Switch,Xbox,Camcorder,Action Cam,HDMI to USB 2.0 Game Capture Card",
                            "productTitle": "KeeQii Capture Card, Full HD 1080P Video ps3 and ps4 compatible HDMI to USB 2.0 Game Capture Card",
                            "priceTags": "15.98"
                        }
                    ]} />
                    <h4>
                        <Emoji symbol="✅" label="grenn-checkmark" />
                            Capturadoras PCi-Express para hacer Streaming
                        <Emoji symbol="✅" label="grenn-checkmark" />
                    </h4>
                    <p className="capturadora-p">
                        A demas de capturadoras portatiles tenemos <b>capturadoras que se conectan a travez de el puerto pci-express</b> a nuestra pc es una buena opcion y nos da el mejor rendimiento ya que baja la latencia que tenemos en al mandar el video a la aplicacion que estemos ultilizando para hacer streaming o para grabar, y esa latencia tambien se ve reflejada en el envio de datos a nuestro monitor o pantalla que estemos utilizando ya que algunas capturadoras de baja calidad retrazan el video y en algunos casos se puede notar una buena diferencia por eso estos son <b>la mejor opcion para hacer estreming en PC desktop</b>, aqui te mostramos <span><b>las 3 mejores capturadoras pci</b></span> 
                    </p>
                    <AmazonBannerRow products={[
                        {
                            "productLink": "https://amzn.to/2F2IiKO",
                            "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/61UrbEmUEbL._AC_SL1500_.jpg",
                            "imageAlt": "Elgato Game Capture 4K60 Pro MK.2 - 4K60 HDR10 Capture and Passthrough, PCIe Capture Card,Superior Low Latency Technology mejor capturadora pci express",
                            "productTitle": "Elgato Game Capture 4K60 Pro MK.2 - 4K60 HDR10 Capture, PCIe Capture Card,Superior Low Latency Technology",
                            "priceTags": "246.87"
                        },
                        {
                            "productLink": "https://amzn.to/36CIxrk",
                            "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/61vMkOgbXqL._AC_SL1000_.jpg",
                            "imageAlt": "AVerMedia Live Gamer 4K - 4Kp60 HDR Capture Card, Ultra-Low Latency for Broadcasting and Recording PS4 Pro and Xbox One X, PCIe Gen2x4 (GC573)",
                            "productTitle": "AVerMedia Live Gamer 4K - 4Kp60 HDR Capture Card, Ultra-Low Latency for Broadcasting and Recording PS4 Pro and Xbox One X, PCIe Gen2x4 (GC573)",
                            "priceTags": "249.99"
                        },
                        {
                            "productLink": "https://amzn.to/2SuJPMU",
                            "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/81A0xDEJuXL._AC_SL1500_.jpg",
                            "imageAlt": "Elgato Game Capture HD60 Pro - Stream and record in 1080p60, superior low latency technology, H.264 hardware encoding, PCIe, black",
                            "productTitle": "Elgato Game Capture HD60 Pro - Stream and record in 1080p60, superior low latency technology, H.264 hardware encoding, PCIe, black",
                            "priceTags": "178.92"
                        },
                    ]}
                    />
                    <h4>
                        <Emoji symbol="✅" label="grenn-checkmark" />
                            ¿se puede usar una capturadora pci-express para grabar en consolas PS4, XBOX One, Wii U...?
                        <Emoji symbol="✅" label="grenn-checkmark" />
                    </h4>
                    <p className="capturadora-p">
                        si se puede hacer ya que las capturadoras tiene una intefaz loop que transmite el video que le pases por la entrada HDMI, la desventaja de esta es que tienes que tener la PC cercar de la consola o un cable HDMI de un buen tamaño para llegas hasta la consola. tambien puedes resivar nuestro turorial de <Link to="/blogs-y-tutoriales/como-instalar-una-capturadora-pci-express">¿como instalar una capturadora gamer pci-express en nuestra pc?</Link>
                    </p>
                </article>
            </div>
        </React.Fragment>
    )
}

export default Capturadoras