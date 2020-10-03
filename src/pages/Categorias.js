import React from 'react'
import HeadTags from '../components/HeadTags'

function Categorias() {
    return(
        <React.Fragment>
            <HeadTags
                metaTitle="este es otro titulo"
                pageTitle="se cambio el title"
            />
            <h4>
                este es el Categorias
            </h4>
        </React.Fragment>
    )
}

export default Categorias;