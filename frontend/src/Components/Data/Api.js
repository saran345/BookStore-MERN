
import axios from "axios";

// Base URL for your API
const baseUrl = "http://127.0.0.1:7000";

// Create an Axios instance with default settings
const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});



 export const postRegister=async(endpoint,data)=>{
    try{
        const response=await axiosInstance.post(endpoint,data);
     return response.data;
    }catch(err){
        console.error("post registration error",err)
        throw err;
    }
}


const postLogin=async(endpoint,data)=>{
    try{
        const response=await axiosInstance.post(endpoint,data);
        return response.data;
    }catch(err){
        console.error("post Login error",err)
        throw err;
    }
}

const sendId=async(endpoint)=>{
    try{
        const response=await axiosInstance.post(endpoint)

        return response.data;
    }catch(err){
        console.error("Error occur while sending id",err)
    }
}

const  cartGet=async(endpoint)=>{
    try{
        const response=await axiosInstance.get(endpoint)
        return response.data;
    }catch(err){
        console.error("Error occur while fetching the cart List!!!",err)
    }
}

export const postContact=async(endpoint,data)=>{
    try{
        const response=await axiosInstance.post(endpoint);
     return response.data;
    }catch(err){
        console.error("post Contact error",err)
        throw err;
    }
}
export const postDelete=async(endpoint)=>{
    try{
        const response=await axios.delete(endpoint)
        return response.data;
    }catch(err){
        console.error("delete error occur",err)
        throw err;
    }
}


 const Api={
    postRegister,
    postLogin,
    sendId,
    cartGet,
    postContact,

}


export default Api;
