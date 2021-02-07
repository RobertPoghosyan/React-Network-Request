import React, { Component } from "react";

import Post from "components/Post/Post";

import './Posts.scss';

export class Posts extends Component {

  request = (method = 'GET',url,data = null)=>{
    return fetch(url,{
        method,
        headers: data ? {'Content-Type':'application/json'}: {},
        body: data ? JSON.stringify(data): null
    })
    .then(res=>{
        console.log("res before json: ",res)
        if(res.status>=400){
            const err = new Error ('Status code 400 and higher');
            throw (err);
        }
       return res.json()
    })
    
}

  state = {
    posts:[]
  }

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(res => res.json())
    //   .then(resJson =>{
    //     this.setState({
    //       posts:resJson
    //     })
    //   })

      this.request('GET','https://jsonplaceholder.typicode.com/posts')
        .then(resJson => {
            this.setState({
                posts:resJson
            })
        })
      .catch(err =>{
        console.log(err);
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
      </div>
    )
  }
}

export default Posts;
