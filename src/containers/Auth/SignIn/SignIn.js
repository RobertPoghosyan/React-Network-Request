import React,{useState} from 'react';

import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import fbService from 'api/fbService';

import "./SignIn.scss";

const SignIn = () => {
    //const[email,setEmail]  = useState("");
    //const[password,setPassword]  = useState("");

    const [credentials,setCredentials] = useState({
        email:"",
        password:"",
    })

    const changeHandler = (name,value)=>{
        setCredentials({
            ...credentials,
            [name]:value,
        })
    }

    const handleSignin = async ()=>{
      const user =  await fbService.signIn(credentials);
      console.log(user);
    }

    return (
        <div className = "app-signIn">
            
            <div className = "app-signIn__rhombus"></div>
            <div className = "app-signIn__form">
                <h1>SIGN IN</h1>
                <Input
                    value = {credentials.email}
                    onChange ={(e)=>changeHandler("email",e.target.value)}
                    placeholder = "Email Address"
                    className = "app-signIn__input"
                />
                <Input
                    value = {credentials.password}
                    onChange ={(e)=>changeHandler("password",e.target.value)}
                    placeholder = "Password"
                    className = "app-signIn__input"
                />
                <Button onClick = {handleSignin}>Submit</Button>
            </div>
        </div>
    )
}

export default SignIn;
