import React, { Component } from 'react';

import Post from 'components/Post/Post';
import service from 'api/service';
import Modal from '@material-ui/core/Modal';

import "./PostDetails.scss";

import load from "assets/load.gif";
import { Button } from '@material-ui/core';

export class PostDetails extends Component {

    state = {
        post:null,
        isEditModalOpen:false,
        titleValue:'',
        bodyValue:''
    }

    componentDidMount (){
        service.getPost(this.props.match.params.postId)
        .then(resJson => {
            this.setState({
              post: resJson,
              titleValue: resJson.title,
                
            })
        })
      .catch(err =>{
        console.log(err);
        this.props.history.push('/')
      })
    }

    toggleCloseModal = ()=>{
        this.setState(prevState =>({
            isEditModalOpen: !prevState.isEditModalOpen
        }))
    }

    savePost = ()=>{
        service.updatePost(this.state.post.id, {
            ...this.state.post,
            title:this.state.titleValue
        }).then(res=>{
            this.setState({
                post: {...this.state.post, title:this.state.titleValue},
                isEditModalOpen: false
            })
        })
        .catch(err =>{
            console.log(err);
            this.toggleCloseModal();
          })
    }

    changeTitle = (e)=>{
        this.setState({
            titleValue:e.target.value
        })
    }

    render() {
        const {post,isEditModalOpen,titleValue} = this.state;
        if(!post){
            return <div><img src ={load}></img></div>
        }
        return (
            <div className = "app-postDetails">
                <Post
                    post = {post}
                    edit = {this.toggleCloseModal}
                />
                <Modal open={isEditModalOpen} onClose={this.toggleCloseModal} className = "app-postDetails__modal">
                    <div className = "app-postDetails__modal__edit">
                        <input value = {titleValue} onChange = {this.changeTitle} className = "app-postDetails__input"/>
                        <Button variant="contained" color="primary" onClick = {this.savePost}>SAVE</Button>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default PostDetails;
