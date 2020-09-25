import React from 'react'
import post from '../utils/topPost.json'
import './TopPost.css'
import { Link } from 'react-router-dom'

function TopPost() {
    return(
        <React.Fragment>
            <div className="post-row">
                {
                    post.map((post) => (
                        <div className="post_container" key={post.id} >
                            <img src={post.img} alt={post.tags} />
                            <Link to={`blogs-y-tutoriales/${post.id}`}>
                                <h3>
                                    {post.title}                                
                                </h3>
                            </Link>
                            <p>
                                {post.content}
                            </p>
                        </div>
                    ))
                }
            </div>        
        </React.Fragment>
    )
};

export default TopPost