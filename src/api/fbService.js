import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

import firebaseConfig from "./firebaseConfig";



class FbService {
    constructor (){
        if(firebase.apps.length === 0){
            firebase.initializeApp(firebaseConfig);
        }
    }

    getAllPosts = async () => {
       const res = await firebase.database().ref("posts").get();
       const data = res.toJSON();
       return Object.values(data);
    }

    getPosts = async (startAt = 0 ,endAt = 8)=>{
        const res = await firebase.database()
        .ref("posts")
        .orderByKey()
        .startAt(startAt.toString())
        .endAt(endAt.toString())
        .get()
        const data = res.toJSON();
        return Object.values(data);
    }

    updatePost = async (postData) =>{
        const postRef = firebase.database().ref(`posts/${postData.id}`);
        await postRef.update(postData)
        const res = await postRef.get();
        return res.val();
    }

    getPost = async(id) =>{
       const res = await firebase.database()
       .ref(`posts/${id}`)
       .get()
       return res.val();
    }

    createPost = async(postData) => {
        const res = await firebase.database()
        .ref("posts")
        .orderByKey()
        .limitToLast(1)
        .get();
        const lastItemJson = res.toJSON();
        const lastItem = Object.values(lastItemJson)[0];
        const {id} = lastItem;
        const newItem = {
            ...postData,
            id:id + 1
        }
      

        await firebase.database()
       .ref(`posts/${id+1}`)
       .set(newItem)

       return newItem;
       
    }

    removePost = async (id) =>{
        const postRef = firebase.database().ref(`posts/${id}`);
        await postRef.remove()

        const posts = await this.getAllPosts()
        await firebase.database().ref("posts")
        .set(posts.map((el,idx)=>{
            return {
                ...el,
                id:idx
            }
        }))
    }

    signIn = async (credentials)=>{
      const res =  firebase.auth().signInWithEmailAndPassword(credentials.email,credentials.password)
      const{uid,displayName,photURL,email} = res.user;

      return {uid,displayName,photURL,email};
    }

    signUp = async (credentials)=>{
     const res =  await  firebase.auth().createUserWithEmailAndPassword(credentials.email,credentials.password)
     const{uid,displayName,photURL,email} = res.user;

      return {uid,displayName,photURL,email};
    }
}

const fbService = new FbService();
export default fbService;


