import React from 'react'
import PropTypes from 'prop-types';

import Link from "components/Link/Link"

import './Post.scss';

const Post = ({post, className = '',isLink = false}) => {

    const Wrapper = ({children}) =>{
        const postClassName = `app-post ${className}`;
        return isLink ? (
            <Link className = {postClassName} to = {`/posts/${post.id}`}>
                {children}
            </Link>
        ) : (
                <div className = {postClassName}> {children} </div>
            )
    }
    return (
        <Wrapper>
            
            <span className = "app-post__title">{post.title}</span>  
            <span className = "app-post__body">{post.body}</span>  
            
        </Wrapper>
    )
}

Post.propTypes ={
    post:PropTypes.exact({
        title:PropTypes.string.isRequired,
        body:PropTypes.string.isRequired,
        id:PropTypes.number.isRequired,
        userId:PropTypes.number.isRequired,
        isLink:PropTypes.bool
    }),
    className:PropTypes.string,
}

export default Post;
