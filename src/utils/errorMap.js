const errorMap = (message)=>{
    const map = {
        "The email address is badly formatted." :"Սխալ էլեկտրոնային հասցե",
        "Password should be at least 6 characters" : "Գաղտնաբառը պետք է պարունակի 6 նիշ և ավել"
    }
    return map[message];
}

export default errorMap;