import React from 'react'
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';
import Button from "@material-ui/core/Button";

import Link from "components/Link/Link";

import './Post.scss';

const Post = ({post, className = '',isLink = false, edit = ()=>{} ,remove =()=>{} }) => {

    const removeHandler = (e) => {
        e.preventDefault();
        remove();
    }

    const Wrapper = ({children}) =>{
        const postClassName = `app-post ${className}`;
        return isLink ? (
            <Link className = {postClassName} to = {`/posts/${post.id}`}>
                <Button variant="contained" color="primary" onClick = {removeHandler}>
                    <span className = "app-post__edit">Remove</span>
                </Button>
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
        edit:PropTypes.func,
        remove:PropTypes.func
    }),
    className:PropTypes.string,
}

export default Post;
