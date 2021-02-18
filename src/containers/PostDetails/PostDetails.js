import React, { Component } from 'react';

import Post from 'components/Post/Post';
import service from 'api/service';

import load from "assets/load.gif";

export class PostDetails extends Component {

    state = {
        post:null
    }

    componentDidMount (){
        service.getPost(this.props.match.params.postId)
        .then(resJson => {
            this.setState({
              post:resJson,
                
            })
        })
      .catch(err =>{
        console.log(err);
        this.props.history.push('/')
      })
    }

    render() {
        const {post} = this.state;
        if(!post){
            return <div><img src ={load}></img></div>
        }
        return (
            <div>
                <Post
                    post = {post}
                />
            </div>
        )
    }
}

export default PostDetails;
