import React from 'react'
import AmazonBannerRow from './amazonBannerRow'
import Allproducts from '../utils/allProducts.json'

//var productToshow = Allproducts.filter(item => ( Allproducts.category === props.category ))

const filteredAmazonRow = props => (
    <div>
        <AmazonBannerRow products={Allproducts.filter(item => (item.category === props.category))} />
    </div>
)

export default filteredAmazonRow