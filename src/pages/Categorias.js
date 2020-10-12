import React, { useState } from 'react'
import FilteredAmazonRow from '../components/filteredAmazonRow'
import allProducts from '../utils/allProducts.json'
import AmazonBannerRow from '../components/amazonBannerRow'

function Categorias() {
    const [list, setList] = useState("todos los productos")

    return(
        <React.Fragment>
            <div className="dinamicContentContainer">
                <h3>
                    {`estas viendo ${list}`}
                </h3>
                <div className="dinamicTextContainer">
                    <p>
                        {"holas"}
                    </p>
                </div>
                <div className="buttonContainer">
                    <button onClick={ e => { setList(e.target.value) } } value="todos los productos">
                        todos los products
                    </button>
                    <button onClick={ e => { setList(e.target.value) } } value="capturadoras">
                        capturadoras
                    </button>
                    <button onClick={ e => { setList(e.target.value) } } value="gadgets">
                        gadgets
                    </button>
                </div>
            </div>
            {
                list === "todos los productos" ? <AmazonBannerRow products={allProducts} /> : <FilteredAmazonRow category={list} />
            }
        </React.Fragment>
    )
}

export default Categorias