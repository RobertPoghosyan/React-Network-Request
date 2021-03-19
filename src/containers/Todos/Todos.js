import React, { Component } from "react";
import {connect} from "react-redux" ;

import { AppContext } from "context/AppContext";
import Todo from "components/Todo/Todo";

import PostModal from 'components/PostModal/PostModal';
import service from "api/service";
import fbService from "api/fbService";
import {setReduxTodos,getMoreReduxTodos,hasMoreReduxTodos} from "actions/todoActions";

import load from "assets/load.gif";
import noResults from "assets/noResults.jpg";

import './Todos.scss';

const limit = 8;

export class Todos extends Component {

    state = {
        start:this.props.posts ? this.props.posts.length : 0 ,
        loading:false,
        isCreateModalOpen:false,
        titleValue:"",
        bodyValue:""
    }

    static contextType = AppContext;

    componentDidMount() {
        if(!this.props.posts){

            fbService.todoService.getPosts()
            .then(data => {
                this.props.setReduxTodos(data);
            })
        }
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
    const newPost = {
      title:this.state.titleValue,
      body:this.state.bodyValue,
      userId:1
    }
    fbService.postsService.createPost(newPost)

    .then(resJson =>{
      
      this.toggleCreateModal();
      this.props.history.push(`/todos/${resJson.id}`)
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

  removePost = (id)=>{
    const {start} = this.state
    fbService.todoService.removePost(id)
    .then(() => {
      fbService.todoService.getPosts(0,start !==0 ? start +limit : limit)
      .then(res=>{
        this.props.setReduxPosts(res);
      })
      
        
    })
    .catch(err =>{
      console.log(err);
    })

  }

  
  getMore =()=>{
    const newStart = this.state.start + limit + 1;
    this.setState({
      start:newStart,
      loading:true
    })
    fbService.todoService.getPosts(newStart,newStart + limit)
      .then(resJson => {
        this.props.hasMoreReduxTodos(resJson.length <limit ? false : true)
        this.props.getMoreReduxTodos(resJson);
        this.setState({
          loading:false,
        })
      })
  }

  toggleCreateModal = ()=>{
    this.setState(prev =>({ isCreateModalOpen : !prev.isCreateModalOpen}))
  }

  changeValue = (e)=>{
    const {name,value} = e.target;
    this.setState({
        [name]:value
    })
}

  render() {
    const {loading,isCreateModalOpen,titleValue,bodyValue} = this.state;
    //const {state:{posts}} = this.context;
    const {posts ,hasMore} = this.props;

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
              return <Todo 
                        key = {post.id}
                        post = {post}
                        className = "app-posts__container__post"
                        isLink = {true}
                        remove = {()=>this.removePost(post.id)}
                      />
            })
          }
        
        </div>
        {hasMore && <div>{loading ? <img src ={load}></img>: <button onClick = {this.getMore} disabled = {loading} className = "app-posts__btn-getMore">GET MORE</button>}</div>}

        <button onClick={this.toggleCreateModal} className = "app-posts__btn__create"> Create Post </button>
        {/* <button onClick={this.updatePost} className = "app-posts__btn__update"> Update Post </button>
        <button onClick={()=>this.deletePost(5)} className = "app-posts__btn__delete"> Delete Post </button> */}
        <PostModal
          action = {this.createPost}
          bodyValue = {bodyValue}
          titleValue = {titleValue}
          changeValue = {this.changeValue}
          isOpen = {isCreateModalOpen}
          onClose = {this.toggleCreateModal}
          buttonTitle = "Create"

        />

      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    posts:state.todosData.posts,
    hasMore:state.todosData.hasMore
  }
}

const mapDispatchToProps ={
  setReduxTodos,
  getMoreReduxTodos,
  hasMoreReduxTodos
}

export default connect(mapStateToProps,mapDispatchToProps) (Todos);



