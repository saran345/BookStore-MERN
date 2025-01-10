import {  useState } from "react"
import NavBar from "./NavBar";
import Api from "./Data/Api";

export default function RegisterPage() {

  const [data,setDate]=useState({username:"",email:"",password:"",role:"" });
  const [err,setErr]=useState({});






     const handlechange=(e)=>{

        const {name,value}=e.target;
        setDate({...data,[name]:value});
     }
     const validate=()=>{
      const display={};
      if(!data.username.trim()){
         display.username="Username is required"
      }else if(data.username.length<5){
         display.username="username is less than 5"
      }

      if(!data.email.trim()){
         display.email="Email is required"
      }else if(!/\S+@\S+\.\S+/.test(data.email)){
         display.email="Enter the valid Email"
      }
      if(!data.password.trim()){
         display.password="Password is required"
      }else if(data.password.length<5){
         display.password="Password is less than 5 letter"
      }
      if(!data.role.trim()){
         display.role="Role is required"
      }
      setErr(display);
      return Object.keys(display).length==0;
     }
     const handlesubmit=async(e)=>{
       e.preventDefault();
       if(validate()){
         const response=await Api.PostRegister("/register",data)
         console.log("Form successfully submitted!",response);
         setDate({username:"",email:"",password:"",role:""})
         setErr({})
       }

     }

  return (
    <>
   <div>
      <NavBar />
   </div>
   <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4 mt-[-5em">
   <div className='bg-white shadow-lg rounded-lg p-12 w-full  max-w-[30em]  '>
   <form className="grid gap-3" onSubmit={handlesubmit}>
      <div className="text-gray-800 text-center text-3xl bold">REGISTRATION</div>
      <div className="max-w-md w-full">
      <div className="text-xl text-gray-800 mb-2 block">Username</div>
        <div className="form-input">
    <input type="text" className='w-full text-gray-800 text-lg border border-gray-300 px-4 py-3 rounded-md outline-blue-600'
    name="username"
    placeholder="enter your username"
    value={data.username}
    onChange={handlechange}  />
 </div>
{err.username && <p style={{color:"red"}}>{err.username}</p>}
      </div>
      <div className="max-w-md w-full">
      <div className="text-xl text-gray-800 mb-2 block">Password</div>
 <div className="form-input">
    <input type="text"
     className='w-full text-gray-800 text-lg border border-gray-300 px-4 py-3 rounded-md outline-blue-600 '
    name="password"
    placeholder="enter your password"
    value={data.password}
    onChange={handlechange}  />

 </div>
 {err.password && <p style={{color:"red"}}>{err.password}</p>}



      </div>
      <div className="max-w-md w-full">
      <div className="text-xl text-gray-800 mb-2 block">Email</div>
 <div className="form-input">
    <input type="email" className='w-full text-gray-800 text-lg border border-gray-300 px-4 py-3 rounded-md outline-blue-600'
    name="email"
    placeholder="enter your Email"
    value={data.email}
    onChange={handlechange}  />
 </div>
 {err.email && <p style={{color:"red"}}>{err.email}</p>}
      </div>
      <div className="max-w-md w-full">
      <div className="text-xl text-gray-800 mb-2 block">Role:</div>
 <div className="form-input">
    <input type="text" className='w-full text-gray-800 text-lg border border-gray-300 px-4 py-3 rounded-md outline-blue-600'
    name="role"
    placeholder="enter your role (user / admin)"
    value={data.role}
    onChange={handlechange} />
 </div>
 {err.role && <p style={{color:"red"}}>{err.role}</p>}
      </div>
      <div className="form-submit">
      <button type='submit' className='w-full py-3 px-4 text-lg tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none'>Register</button>
      </div>
      </form>
</div>
   </div>
    </>
  )
}
