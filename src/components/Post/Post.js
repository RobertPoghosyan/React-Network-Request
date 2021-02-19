import React from 'react'
import PropTypes from 'prop-types';

import Link from "components/Link/Link";
import EditIcon from '@material-ui/icons/Edit';
import Button from "@material-ui/core/Button";

import './Post.scss';

const Post = ({post, className = '',isLink = false, edit = ()=>{} }) => {

    const Wrapper = ({children}) =>{
        const postClassName = `app-post ${className}`;
        return isLink ? (
            <Link className = {postClassName} to = {`/posts/${post.id}`}>
                {children}
            </Link>
        ) : (
                <div className = {postClassName}> 
                    <Button variant="contained" color="primary" onClick = {edit}>
                        <EditIcon/> 
                        <span className = "app-post__edit">Edit</span>

                    </Button>
                    {children} 
                </div>
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
        isLink:PropTypes.bool,
        edit:PropTypes.func
    }),
    className:PropTypes.string,
}

export default Post;
