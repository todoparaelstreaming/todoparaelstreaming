import React from 'react'
import Emoji from '../components/emojiSymbol'
import { Link } from 'react-router-dom';
import Contenido from '../utils/content.json'
import './styles/Blogs.css'

function Blogs() {

    return(
        <React.Fragment>
            <div className="blogs-container" >
                {
                    Contenido.map(blogsMap => (
                        <div className="blog-content" key={blogsMap.id}>
                            <div className="blog-description-container">
                                <div className="blog-image-container">
                                    <Link to={`/blogs-y-tutoriales${blogsMap.url}`}>
                                        <img src={blogsMap.img} alt={blogsMap.imgAlt} /> 
                                    </Link>
                                </div>
                                <div className="blog-description">
                                    <Link to={blogsMap.url} >
                                        <h3>
                                            {blogsMap.title}
                                        </h3>
                                    </Link>
                                    <p>
                                        {blogsMap.content}
                                    </p>
                                </div>
                            </div>      
                            <div className="tags-container">
                                <p>
                                    {
                                        blogsMap.tags.map(tag =>(
                                            <span key={tag}>
                                                <Emoji symbol="🏷️" label="tag-symbol"/>{`${tag} `}
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