const email = "Hello@bb.am";
const pass = "1345689@fghghA"
const regexp = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
const regexp2 = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)

const validate = (email,pass)=>{
    if(email){
        return regexp.test(email)
    }
    if(pass){
        return regexp2.test(pass)
    }     
    
          
}

const validate1 = (pass)=>{
   

    return regexp2.test(pass) 
    
          
}
console.log(validate(email,pass));