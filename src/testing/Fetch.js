import React,{Component} from 'react';

export class Fetch extends Component {

    request =(method,url,body = {}) => {
        return fetch(url);                                    //  by default GET
    }                                                         // .then((res)=>res.json()) 

    getAnotherData = ()=>{
        this.request('GET','https://reqres.in/api/users?page=2')
        .then((res)=>{                                                   // .then((res)=>res.json()) - same but short 
            return res.json()
        })
        .then((resJson)=>{
            console.log(resJson);

        })
        .catch((err)=>{
            console.log(err);
        })
      }


    render (){
        return (
            <div>
                <button onClick = {this.getAnotherData} > GET DATA BY FETCH </button>
            </div>
        )
    }
}

export default Fetch;