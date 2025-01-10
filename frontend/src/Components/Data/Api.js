import axios from "react"

const baseUrl="http://127.0.0.1:7000/";

const axiosInstance=axios.create({

    baseURL:baseUrl,
    headers:{
        'content-Type':'Application/json',
    },

})

const PostRegister=async(endpoint,data)=>{
    try{
        const response=await axiosInstance.post(endpoint,data);
    return response.data;
    }catch(err){
        console.err("post registration error",err)
        throw err;
    }
}

const PostLogin=async(endpoint,data)=>{
    try{
        const response=await axiosInstance.post(endpoint,data);
        return response.data;
    }catch(err){
        console.err("post Login error",err)
    }
}

 const Api={
    PostRegister,
    PostLogin,
}


export default Api;
