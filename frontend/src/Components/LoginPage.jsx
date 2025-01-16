import {useState} from 'react'
import NavBar from "./NavBar"
import { Link } from 'react-router-dom';
import Api from './Data/Api';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {


   const [isPasswordVisible,setIsPasswordVisible]=useState(false);

    const [login, setLogin] = useState({email:"",password:""})
    const [error, setError] = useState({})

const navigate=useNavigate()

     const handleChange=(e)=>{
          const {name,value} = e.target;
          setLogin({...login,[name]:value})
     }
      const validate=()=>{
        const display={}

      if(!login.email.trim()){
        display.email="Email is required!"
      }else if(!/\S+@\S+\.\S+/.test(login.email)){
        display.email="Invalid Email"
      }

      if(!login.password.trim()){
        display.password="Password is required!"
      }else if(login.password.length<5){
        display.password="Password is less than 5"
      }
      setError(display);
     return Object.keys(display).length==0;
    }

     const handleSubmit= async(e)=>{
       e.preventDefault();
       if(validate()){
        try{
          const response=await Api.postLogin("/api/login",login)
          console.log("login successfully!!!",response)
  
          if(response.status===200){
            alert("Successfully login!!!")
          setLogin({email:"",password:""})
          setError({})
            const role=getRoleFromCookie();
            console.log("role",role)
            if(role==="admin"){
              navigate("/Admin")
            }else if(role ==="user"){
              navigate("/")
            }else{
              console.log("Invalid error")
            }
          }else{
            console.log("login failed",response);
          }
        }catch(err){
            console.error("invalid",err)
        }
       }

     }


    //  
     const getRoleFromCookie=()=>{
       const cookie=document.cookie.split(";").find((row)=> row.startsWith("token="));
       if(!cookie) return null;
       const token=cookie.split("=")[1];
      try{
        const payload=JSON.parse(atob(token.split(".")[1]));

        return payload.role;
      }catch(err){
        console.log("invalid token",err)
        return null;
      }
     }

  return (
       <>
       <div> <NavBar />
       </div>
       {/* Login Form */}
       <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4 mt-[-5em]">
       <div className='bg-white shadow-lg rounded-lg p-12 w-full  max-w-[30em]  '>
       <form className='grid gap-8' onSubmit={handleSubmit}>
        <h1 className='text-gray-800 text-center text-3xl bold'>LOGIN PAGE</h1>
        <div className='max-w-md w-full'>
            <label htmlFor='email' className='text-xl text-gray-800 mb-2 block'>Email:</label>
            <div className='form-input'>
                <input type='email' className='w-full text-gray-800 text-lg border border-gray-300 px-4 py-3 rounded-md outline-blue-600'
                name='email'
                value={login.email}
                onChange={handleChange} />
            </div>
        {error.email && <p style={{color:"red"}}>{error.email}</p>}
        </div>
        <div className='form-cell'>
            <label htmlFor='password' className='text-gray-800 text-xl mb-2 block'>Password:</label>
            <div className='relative'>
                <input type={isPasswordVisible?"text":"password"}
                 className='w-full text-gray-800 text-lg border border-gray-300 px-4 py-3 rounded-md outline-blue-600 pl-18 '
                name='password'
                value={login.password}
                onChange={handleChange} />
                  <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5  absolute left-[21em] top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
    >
{isPasswordVisible?(
   <path
   strokeLinecap="round"
   strokeLinejoin="round"
   d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
 />
):(
  <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.98 8.292a11.925 11.925 0 0117.04 0M21.02 15.707a11.925 11.925 0 01-17.04 0"
        />
)}
</svg>
            </div>
        {error.password && <p style={{color:"red"}}>{error.password}</p>}
        </div>
        <div className='form-button'>
            <button type='submit' className='w-full py-3 px-4 text-lg tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none'>Login</button>
        </div>
        <p className="text-gray-800 text-md !mt-8 text-center">Don&apos;t have an account?
          <Link to="/register" className="text-blue-600 text-lg hover:underline ml-1 whitespace-nowrap font-semibold">Register here</Link></p>

       </form>
    </div>
       </div>

       </>
  )
}
