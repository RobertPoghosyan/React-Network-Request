import React,{useState , useContext} from 'react';
//import { toast } from 'react-toastify';

import { AppContext } from 'context/AppContext';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import fbService from 'api/fbService';
import ErrorMessage from 'components/Errors/ErrorMessage/ErrorMessage';
import errorMap from 'utils/errorMap';

import "./SignUp.scss";

const SignUp = () => {
    // const[email,setEmail]  = useState("");
    // const[password,setPassword]  = useState("");

    const context = useContext(AppContext)

    const [loading,setLoading] = useState(false);

    const [credentials,setCredentials] = useState({
        email:"",
        password:"",
    })

    const [errorState,setErrorstate] = useState({
        emailError:"",
        passwordError: ""
    })

    const changeHandler = (name,value)=>{
        
        setErrorstate({
            emailError:"",
            passwordError: "" 
        })

        setCredentials({
            ...credentials,
            [name]:value,
        })
    }

    const handleSignup = async ()=>{
        try{
            setLoading(true);
            const user =  await fbService.signUp(credentials);
            context.setUser(user);
        }catch(err){
            setErrorstate(
                err.code.includes("email") ? { emailError:errorMap(err.message)}: 
                err.code.includes("password") ? { passwordError:err.message}:
                "" 
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
                    value = {credentials.email}
                    onChange ={(e)=>changeHandler("email",e.target.value)}
                    placeholder = "Email Address"
                    className = "app-signUp__input"
                    loading = {loading}
                />
               <ErrorMessage text = {errorState.emailError} /> 
                <Input
                    value = {credentials.password}
                    onChange ={(e)=>changeHandler("password",e.target.value)}
                    placeholder = "Password"
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
