import React from 'react'
import post from '../utils/topPost.json'
import './css/TopPost.css'
import { Link } from 'react-router-dom'
import Emoji from './emojiSymbol'

function TopPost() {
    return(
        <React.Fragment>
            <h2><Emoji symbol="📈" label="chart-increasing" />Top 3 Post y tutoriales de Streaming<Emoji symbol="📈" label="chart-increasing" /></h2>
            <div className="post-row">
                {
                    post.map((post) => (
                        <div className="post_container" key={post.id} >
                            <img src={post.img} alt={post.tags} />
                            <Link to={`blogs-y-tutoriales/${post.urlName}`}>
                                <h3>
                                    {post.title}                                
                                </h3>
                            </Link>
                            <p className="post-content">
                                {post.content}
                            </p>
                            <div className="tags">
                                <p>
                                    <small>
                                        {post.tags.map(tags => (`🏷️ ${tags}`))}
                                    </small>
                                </p>            
                            </div>
                        </div>
                    ))
                }
            </div>        
        </React.Fragment>
    )
};

export default TopPost