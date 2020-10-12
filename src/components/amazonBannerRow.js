import React from 'react'
import Emoji from './emojiSymbol'
import './css/amazonBannerRow.css'

const AmazonBannerRow = props => (
    <React.Fragment>
        <div className="amazon-banner-row">
            {
                props.products.map( products => (
                    <div className="amazon-banner-card" key={products.productLink}>
                        <div className="product-image-container">
                            <a href={products.productLink} target="BLANK">
                                <img src={products.imgSrc} alt={products.imgAlt} />
                            </a>
                        </div>
                        <div className="product-name-title">
                            <h3>
                                <a href={products.productLink} target="BLANK">
                                    {products.productTitle}
                                </a>
                            </h3>
                        </div>
                        <div className="priceTag">
                            {products.priceTags}<b>USD</b>
                        </div>
                        <div className="amazon-button-container">
                            <a href={products.productLink} target="BLANK" title="buy on amazon" className="amazon-button-row">
                                <Emoji symbol="🛒" label="Shopping-car" /> Comprar en Amazon
                            </a>
                        </div>
                    </div>
                ))
            }
        </div>
    </React.Fragment>
)

export default AmazonBannerRow