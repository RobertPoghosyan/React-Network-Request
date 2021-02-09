import React, { Component } from "react";

import Post from "components/Post/Post";
import service from "api/service";

import './Posts.scss';

export class Posts extends Component {

  
  state = {
    posts:[]
  }

  componentDidMount() {
    
    service.getPosts(0,5)
        .then(resJson => {
            this.setState({
                posts:resJson
            })
        })
      .catch(err =>{
        console.log(err);
      })
  }

  updatePost = ()=>{
    service.updatePost(5,{title:'Updated Title'})
    .then(resJson => {
      const newPosts = this.state.posts.map(el => {
        if(el.id === resJson.id){
          return resJson;
        }
        return el;
      })

      this.setState ({
        posts:newPosts
      })

    })

  }

  createPost = ()=>{
    service.createPost({
      title:'Created new Title',
      body:'Created new Body',
      userId:1
    })

    .then(resJson =>{
      this.setState ({
        posts: [...this.state.posts,resJson]
      })

    })

  }

  deletePost = ()=>{
    service.deletePost(5)
    .then(resJson => {
      const afterDelPosts = this.state.posts.filter(el => el.id !== resJson )
      
      this.setState ({
        posts:afterDelPosts
      })
        
    })

  }


  render() {
    return (
      <div className = "app-posts">
        {
          this.state.posts.map(post =>{
            return <Post 
             key = {post.id}
             post = {post}
             className = "app-posts__post"
            />
          })
        }
        <button onClick={this.createPost} className = "app-posts__btn-create"> Create Post </button>
        <button onClick={this.updatePost} className = "app-posts__btn-update"> Update Post </button>
        <button onClick={this.deletePost} className = "app-posts__btn-delete"> Delete Post </button>
      </div>
    )
  }
}

export default Posts;
