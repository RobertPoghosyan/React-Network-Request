import React, { Component } from "react";

import Post from "components/Post/Post";
import service from "api/service";

import load from "assets/load.gif";
import noResults from "assets/noResults.jpg";

import './Posts.scss';

const limit = 9;

export class Posts extends Component {

  
  state = {
    posts:null,
    start:0,
    hasMore:true,
    loading:false,
  }

  componentDidMount() {
    
    service.getPosts(this.state.start,limit)
        .then(resJson => {
            this.setState({
              posts:resJson,
                
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

  deletePost = (id)=>{
    service.deletePost(id)
    .then(() => {
      const afterDelPosts = this.state.posts.filter(el => {
        return el.id !== id;
      })
      this.setState ({
        posts:afterDelPosts
      })
        
    })
    .catch(err =>{
      console.log(err);
    })

  }

  getMore =()=>{
    const newStart = this.state.start + limit;
    this.setState({
      start:newStart,
      loading:true
    })
    service.getPosts(newStart)
      .then(resJson => {
        this.setState({
          posts:[...this.state.posts,...resJson],
          hasMore: resJson.length <limit ? false : true,
          loading:false,
        })
      })
  }



  render() {
    const {hasMore,loading,posts} = this.state;

    if(!posts){
      return <div><img src ={load}></img></div>
    }

    if(!(posts.length > 0)){
      return <div><img src = {noResults}></img>No results</div>
    }
    
    return (
      <div className = "app-posts">
        <div className = "app-posts__container">
          {
            posts.map(post =>{
              return <Post 
                        key = {post.id}
                        post = {post}
                        className = "app-posts__container__post"
                        isLink = {true}
                      />
            })
          }
        
        </div>
        {hasMore && <div>{loading ? <img src ={load}></img>: <button onClick = {this.getMore} className = "app-posts__btn-getMore">GET MORE</button>}</div>}

        <button onClick={this.createPost} className = "app-posts__btn__create"> Create Post </button>
        <button onClick={this.updatePost} className = "app-posts__btn__update"> Update Post </button>
        <button onClick={()=>this.deletePost(5)} className = "app-posts__btn__delete"> Delete Post </button>
      </div>
    )
  }
}

export default Posts;


// {hasMore && <button onClick = {this.getMore} className = "app-posts__btn-getMore" disabled ={loading}>{loading ? "Loading" : "GET MORE"}</button>}