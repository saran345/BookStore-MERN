
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





 const Api={
    postRegister,
    postLogin,
    
}


export default Api;
