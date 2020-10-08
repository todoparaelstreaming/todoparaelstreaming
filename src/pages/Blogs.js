import React from 'react'
import Emoji from '../components/emojiSymbol'
import { Link } from 'react-router-dom';
import Contenido from '../utils/content.json'

function Blogs() {

    return(
        <React.Fragment>
            <div className="blogs-container" >
                {
                    Contenido.map(loQueTeDeLaGana => (
                        <div className="blog-content" key={loQueTeDeLaGana.id}>
                            <div className="blog-description-container">
                                <div className="blog-image-container">
                                    <Link to={`/blogs-y-tutoriales${loQueTeDeLaGana.url}`}>
                                        <img src={loQueTeDeLaGana.img} alt={loQueTeDeLaGana.imgAlt} /> 
                                    </Link>
                                </div>
                                <div className="blog-description">
                                    <h3>
                                        {loQueTeDeLaGana.title}
                                    </h3>
                                    <p>
                                        {loQueTeDeLaGana.content}
                                    </p>
                                </div>              
                            </div>      
                            <div className="tags-container">
                                <p>
                                    {
                                        loQueTeDeLaGana.tags.map(tag =>(
                                            <span>
                                                <Emoji symbol="🏷️" label="tag-symbol"/>{tag}
                                            </span>
                                        ))
                                    }
                                </p>
                            </div>
                        </div> 
                    ))
                }
            </div>
        </React.Fragment>
    )
}

export default Blogs;