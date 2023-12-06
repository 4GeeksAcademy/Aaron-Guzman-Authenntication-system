import React, { useContext, useState } from 'react'
import { Context } from '../store/appContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const {store, actions} = useContext(Context)

    const [inputEmail, setInputEmail] = useState("")
    const [inputPassword, setInputPasssword] = useState("")
  
    const navigate = useNavigate();
  
  
    const handlerLogin = async () => {
      if(inputEmail == "" || inputPassword == ""){
            alert("All fields are required")
           return
      }

      let loginUser = {
            email: inputEmail,
            password: inputPassword
          }

          const result = await actions.tokenConfirmation(loginUser)
          console.log("This is the result:", result)
          if(result && result.access){
            const token = result.access_token;
            sessionStorage.setItem('token', token)
            navigate("/private")
          }else{
            alert("email or password incorrect");
          }
    
    }
  
  
    return (
      <div>
           <div className="mb-3 contactForm">
       
        <label for="exampleFormControlInput1" className="form-label">Email</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="email" name='email' value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} />
  
       <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Password" name='password' value={inputPassword} onChange={(e) => setInputPasssword(e.target.value)} />
   </div>
  
      <button onClick={handlerLogin} type="button" className="btn btn-primary">Log In</button>
  
  
  
      </div>
    )
}

export default Login