import React,{useState} from "react";

import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

import "./Auth.scss";


const Auth = () => {
    const [isSignIn,setIsSignIn] = useState(true);

    const toggleView = ()=>{
        setIsSignIn(!isSignIn);
    }
    
    return (
        <div className = "app-auth">
            {
                <div className = "app-auth-buttons">
                    <div className = "app-auth-buttons__text">{isSignIn ? "Don't have an account?" : "Already have an account?"}</div>
                    <button className = "app-auth-buttons__button" onClick = {toggleView}>{isSignIn ? "SignUp" : "SignIn"}</button>  
                </div>
            }
            <div className = "app-auth-form">
                { 
                    isSignIn ? (
                        <SignIn />
                    ) : (
                        <SignUp/>
                    )     
                }   
            </div> 
        </div>
    )
}

export default Auth;

//{isSignIn ? "SignIn" : "SignUp"}
//<h1>{isSignIn ? "SignIn" : "SignUp"}</h1>
//<button className = "app-auth-buttons__button" onClick = {toggleView}>SignUp</button>