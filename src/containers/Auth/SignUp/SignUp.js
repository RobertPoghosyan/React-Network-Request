import React,{useState , useContext} from 'react';
import {useHistory} from 'react-router-dom';
//import { toast } from 'react-toastify';

import { AppContext } from 'context/AppContext';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import fbService from 'api/fbService';
import ErrorMessage from 'components/Errors/ErrorMessage/ErrorMessage';
import {validateMail,validatePassword } from 'utils/inputValidation';
//import errorMap from 'utils/errorMap';

import "./SignUp.scss";

const SignUp = () => {
    // const[email,setEmail]  = useState("");
    // const[password,setPassword]  = useState("");

    const context = useContext(AppContext);
    const history = useHistory();

    const [loading,setLoading] = useState(false);

    const [credentials,setCredentials] = useState({
        name:"",
        email:"",
        password:"",
    })

    const [errorState,setErrorstate] = useState({
        emailError:"",
        passwordError: ""
    })

    const changeHandler = (e) => {
        
        setErrorstate({
            emailError:"",
            passwordError: "" 
        })

        setCredentials({
            ...credentials,
            [e.target.name]:e.target.value,
        })
    }

    const handleSignup = async ()=>{
        try{
            setLoading(true);
            const user =  await fbService.signUp(credentials);
            context.dispatch({type:'SET_USER',payload:{user}});
            localStorage.setItem("user",JSON.stringify(user));
            history.push('/profile');
            
        }catch(err){
            setErrorstate(
                (validateMail(credentials.email) === false ) ? {emailError:"The email address is not valid" }: 
                (validatePassword(credentials.password) === false ) ? {passwordError:"Password is not valid" }:""
                //err.code.includes("email") ? { emailError:errorMap(err.message)}: 
                //err.code.includes("password") ? { passwordError:err.message}:
                //"" 
            )
            // toast.error(`SignUp failed : ${err.message}`)
        }finally{
            setLoading(false);
        } 
    }

    return (
        <div className = "app-signUp">

            <div className = "app-signUp__rhombus"></div>
            <div className = "app-signUp__form">
                <h1>CREATE ACCOUNT</h1>
                <Input
                    name = "name"
                    value = {credentials.name}
                    onChange ={changeHandler}
                    placeholder = "Name"
                    className = "app-signUp__input"
                    loading = {loading}
                />
                <Input
                    name = "email"
                    value = {credentials.email}
                    onChange ={changeHandler}
                    placeholder = "Email Address"
                    className = "app-signUp__input"
                    loading = {loading}
                />
                
                <ErrorMessage text = {errorState.emailError} /> 
                <Input
                    name = "password"
                    value = {credentials.password}
                    onChange ={changeHandler}
                    placeholder = "Password"
                    type = "password"
                    className = "app-signUp__input"
                    loading = {loading}
                />
                <ErrorMessage text = {errorState.passwordError} />
                <Button onClick = {handleSignup} disabled = {loading}> Submit </Button>
            </div>
        </div>
    )
}

export default SignUp;
