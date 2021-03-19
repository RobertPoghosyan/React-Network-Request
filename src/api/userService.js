import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

import firebaseConfig from "./firebaseConfig";



class UserService {
    constructor (){
        if(firebase.apps.length === 0){
            firebase.initializeApp(firebaseConfig);
        }
    }

    

    signIn = async (credentials)=>{
      const res = await firebase.auth().signInWithEmailAndPassword(credentials.email,credentials.password);
      const{uid,displayName,photURL,email} = res.user;

      return {uid,displayName,photURL,email};
    }

    signUp = async (credentials)=>{
     const res =  await  firebase.auth().createUserWithEmailAndPassword(credentials.email,credentials.password);
     const{uid,displayName,photURL,email} = res.user;
     const user = firebase.auth().currentUser;
     await user.updateProfile({
         displayName:credentials.name
     })

      return {uid,displayName,photURL,email};
    }

    logout = async () =>{
        await firebase.auth().signOut();
    }
}

const userService = new UserService();
export default userService;


