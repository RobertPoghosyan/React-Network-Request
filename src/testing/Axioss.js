import React, { Component } from 'react';

//import axios from 'axios';

export class Axioss extends Component {
     
    request = (method = 'GET',url,data = null)=>{
        return fetch(url,{
            method,
            headers: data ? {'Content-Type':'application/json'}: {},
            body: data ? JSON.stringify(data): null
        })
        .then(res=>{
            console.log("res before json: ",res)
            if(res.status>=400){
                const err = new Error ('Something went wrong');
                throw (err);
            }
           return res.json()
        })
        // return axios({
        //     url,
        //     method,
        //     data
        // })
    }

    componentDidMount(){
        
        //  FETCH //
        
        // fetch ('https://reqres.in/api/register',{
        //     method:'POST',
        //     headers:{
        //         'Content-Type':'application/json',
        //     },
        //     body:JSON.stringify({
        //         email:"eve.holt@reqres.in",
        //         password:"pistol"
        //     })
        // })
        // .then(res=>{
        //     console.log(res);
        //     return res.json("response result : ",res);
        // })
        // .then(resJson =>{
        //     console.log("Json result: ",resJson);
        // })

        this.request('POST','https://reqres.in/api/register',{
            email:"eve.holt@reqres.in",
            //password:"pistol"
        })
        .then(resJson =>{
         console.log(resJson);
        })
        .catch(err =>{
            console.log("this is error: ",err);
        })

        // AXIOS //

        // axios.post('https://reqres.in/api/register', {
        //     email:"eve.holt@reqres.in",
        //     password:"pistol"
        // })
        // .then(({data})=> {
        //     console.log(data);
            
        // })

        // this.request('POST','https://reqres.in/api/register',{
        //     email:"eve.holt@reqres.in",
        //     password:"pistol"
        // })
    }


    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Axioss;