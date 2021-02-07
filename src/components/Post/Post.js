import React from 'react'
import PropTypes from 'prop-types';

import './Post.scss';

const Post = ({post, className = ''}) => {
    return (
        <div className = {`app-post ${className}`}>
          <span className = "app-post__title">{post.title}</span>  
          <span className = "app-post__body">{post.body}</span>  
        </div>
    )
}

Post.propTypes ={
    post:PropTypes.exact({
        title:PropTypes.string.isRequired,
        body:PropTypes.string.isRequired,
        id:PropTypes.number.isRequired,
        userId:PropTypes.number.isRequired
    }),
    className:PropTypes.string,
}

export default Post;
