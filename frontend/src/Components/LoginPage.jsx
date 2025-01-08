import {useState} from 'react'

export default function LoginPage() {
    const [login, setLogin] = useState({email:"",password:""})
    const [error, setError] = useState({})

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

     const handleSubmit= (e)=>{
       e.preventDefault();
       if(validate()){
        console.log("login successfully!!!")
        setLogin({email:"",password:""})
        setError({})
       }

     }

  return (
    <div className='form-container'>
       <form className='form' onSubmit={handleSubmit}>
        <div className='form-title'>LOGIN PAGE</div>
        <div className='form-cell'>
            <label htmlFor='email'>Email:</label>
            <div className='form-input'>
                <input type='email'
                name='email'
                value={login.email}
                onChange={handleChange} />
            </div>
        {error.email && <p style={{color:"red"}}>{error.email}</p>}
        </div>
        <div className='form-cell'>
            <label htmlFor='password'>Password:</label>
            <div className='form-input'>
                <input type='password'
                name='password'
                value={login.password}
                onChange={handleChange} />
            </div>
        {error.password && <p style={{color:"red"}}>{error.password}</p>}
        </div>
        <div className='form-button'>
            <button type='submit'>Login</button>
        </div>

       </form>
    </div>

  )
}
