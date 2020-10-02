import React from 'react'
import './css/amazonBanner.css'
import Emoji from './emojiSymbol'

const amazonBanner = props => {
    return(
        <div className="amazon-container">
            {
                props.rebaja === true && <div className="amazon-container-head">
                    <div className="head-box">
                        <b>Rebaja</b>
                    </div>
                </div>
            }
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
                            <li key={properties} >
                                {properties}
                            </li>
                        ))}
                    </ul>            
                </div> 
            </div>
            <div className="buy-container">
                <div className="buy-container-footer">
                    <p>
                        <Emoji symbol="🤑" label="money-face" />
                        <b id="priceTag">{props.priceTag} </b><b>USD</b>
                    </p>
                    <a href={props.link} target="BLANK" title="buy on amazon" className="amazon-button">
                        <Emoji symbol="🛒" label="Shopping-car" /> Comprar en Amazon
                    </a>
                </div>
            </div>
        </div>
    )
}

export default amazonBanner