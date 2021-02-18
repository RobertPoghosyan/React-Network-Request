
const requestData = (method,url,data = null)=>{
    return fetch(url,{
        method,
        headers: data ? {'Content-Type':'application/json'}: {},
        body: data ? JSON.stringify(data): null
    })
    .then(res=>{
        console.log("res before json: ",res)
        if(res.status < 400){
            return res.json()
        }else{
            const err = new Error ('Network Error:Status code 400 and higher');
            throw (err);
        }
       
    })    
}

const getAllposts = () =>{
    return requestData('GET','https://jsonplaceholder.typicode.com/posts')
}


export {getAllposts};
