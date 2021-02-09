 class Service {
    constructor() {
        this.baseUrl = "https://jsonplaceholder.typicode.com";
    }

    _request  = (method,url,data = null)=>{
        return fetch(`${this.baseUrl}${url}`,{ 
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

    getPosts = (start,limit) =>{
        return this._request('GET',`/posts?_start=${start}&_limit=${limit}`)
    }

    getAllPosts = () =>{
        return this._request('GET','/posts')
    }

    getPost = (id) =>{
        return this._request('GET',`/posts/${id}`)
    }

    createPost = (data) =>{
        return this._request('POST','/posts',data)
    }

    updatePost = (id,data) =>{
        return this._request('PATCH',`/posts/${id}`,data)
    }

    deletePost = (id) => {
        return this._request('DELETE',`/posts/${id}`)
    }
}

const service = new Service;
export default service;


