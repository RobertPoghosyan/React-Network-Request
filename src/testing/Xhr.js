import React, { Component } from "react";

import Fetch from './Fetch';



export class Xhr extends Component {

  sendRequest = (method,url,body={})=>{
    const promise = new Promise((resolve,reject)=>{
      
      const xhr = new XMLHttpRequest();
      xhr.open(method,url);
  
      xhr.setRequestHeader('Content-type','application/json');
  
      xhr.responseType='json';
  
      xhr.onload=()=>{
        const response =xhr.response;    //const response =JSON.parse(xhr.response);
        resolve(response);
      }

      xhr.onerror=()=>{
        const res = xhr.response;
        reject(res);
      }
      xhr.send(JSON.stringify(body));  // request asynchron
    })
    return promise;
  }

  getDataFromDB = ()=>{
   this.sendRequest('GET','https://reqres.in/api/users?page=2')  
   .then((res) => {
     console.log(res);
   })
   .catch((err) =>{ console.log(err) })
  }

  getAnotherData = ()=>{
    this.sendRequest('POST','https://reqres.in/api/users',{
      name:'Rob',
      job:'Frontend dev'
    })
  }


  postDataFromDB = ()=>{
    const xhr = new XMLHttpRequest();
    xhr.open('POST','https://reqres.in/api/users');

    xhr.setRequestHeader('Content-type','application/json');

    xhr.responseType='json';

    xhr.onload=()=>{
      const response =xhr.response;    
      console.log(response);
    }
    xhr.send();
  }




  render() {
    return (
      <div className="App">
        <div>
          NETWORK REQUEST
        </div>
        <button onClick = {this.getDataFromDB} > GET DATA </button>
        <button onClick = {this.getAnotherData} > POST DATA </button>
        <Fetch/>
      </div>
    )
  }
}

export default Xhr;