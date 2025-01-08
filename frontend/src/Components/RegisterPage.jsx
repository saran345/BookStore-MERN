import {  useState } from "react"


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
     const handlesubmit=(e)=>{
       e.preventDefault();
       if(validate()){
         console.log("Form successfully submitted!");
         setDate({username:"",email:"",password:"",role:""})
         setErr({})
       }

     }

  return (
    <>
      <div className="form-container">
      <form className="form" onSubmit={handlesubmit}>
      <div className="form-title">REGISTRATION</div>
      <div className="form-cell">
      <div className="form-label">Username</div>
        <div className="form-input">
    <input type="text"
    name="username"
    placeholder="enter your username"
    value={data.username}
    onChange={handlechange}  />
 </div>
{err.username && <p style={{color:"red"}}>{err.username}</p>}
      </div>
      <div className="form-cell">
      <div className="form-label">Password</div>
 <div className="form-input">
    <input type="password"
    name="password"
    placeholder="enter your password"
    value={data.password}
    onChange={handlechange}  />
 </div>
 {err.password && <p style={{color:"red"}}>{err.password}</p>}
      </div>
      <div className="form-cell">
      <div className="form-label">Email</div>
 <div className="form-input">
    <input type="email"
    name="email"
    placeholder="enter your Email"
    value={data.email}
    onChange={handlechange}  />
 </div>
 {err.email && <p style={{color:"red"}}>{err.email}</p>}
      </div>
      <div className="form-cell">
      <div className="form-label">Role:</div>
 <div className="form-input">
    <input type="text"
    name="role"
    placeholder="enter your role (user / admin)"
    value={data.role}
    onChange={handlechange} />
 </div>
 {err.role && <p style={{color:"red"}}>{err.role}</p>}
      </div>
      <div className="form-submit">
         <button type="submit">Submit</button>
      </div>
      </form>
</div>
    </>
  )
}
