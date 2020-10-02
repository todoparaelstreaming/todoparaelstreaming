import React from 'react'
import './css/amazonBanner.css'
import Emoji from './emojiSymbol'

const amazonBanner = props => {
    return(
        <div className="amazon-container">
            <div className="description-container">
                <div className="img-container">
                    <a href={props.link} target="BLANK">
                        <img src={props.imgSrc} alt={props.alt}/>
                    </a>
                </div>
                <div className="description-of-product">
                    <h4>
                        <a href={props.link} target="BLANK">
                            {props.productTitle}
                        </a>
                    </h4>
                    <ul>
                        {props.description.map(properties => (
                            <li>
                                {properties}
                            </li>
                        ))}
                    </ul>            
                </div> 
            </div>
            <div className="buy-container">
                <a href={props.link} target="BLANK">
                    <button>
                        <Emoji symbol="🛒" label="Shopping-car" /> comprar en amazon
                    </button>
                </a>
            </div>
        </div>
    )
}

export default amazonBanner