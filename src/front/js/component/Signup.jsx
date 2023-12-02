import React, { useContext, useState } from 'react'
import { Context } from '../store/appContext'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const {store, actions} = useContext(Context)
  const [inputName, setInputName] = useState("")
  const [inputEmail, setInputEmail] = useState("")
  const [inputAddress, setInputAddress] = useState("")
  const [inputBirthDate, setInputBirthDate] = useState("")
  const [inputPassword, setInputPasssword] = useState("")

  const navigate = useNavigate();


  const handlerCreateUser = async () => {
    try{
      if(inputName == "" || inputEmail == "" || inputAddress == "" || inputBirthDate == "" || inputPassword == ""){
      alert("All fields are required")
    return
  }

    let newInputUser = {
      name: inputName,
      email: inputEmail,
      address: inputAddress,
      birth_date: inputBirthDate,
      password: inputPassword
    }

    await actions.createNewUser(newInputUser)
    navigate("/demo")
    }catch(error){
      console.error("Error trying to create new user", error)
    }
  }


  return (
    <div>
         <div className="mb-3 contactForm">
      <label for="exampleFormControlInput1" className="form-label">Name</label>
      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" name='full_name' value={inputName} onChange={(e) => setInputName(e.target.value)} />

      <label for="exampleFormControlInput1" className="form-label">Email</label>
      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="email" name='email' value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} />

      <label for="exampleFormControlInput1" className="form-label">Address</label>
      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="address" name='address' value={inputAddress} onChange={(e) => setInputAddress(e.target.value)} />

      <label for="exampleFormControlInput1" className="form-label">Birth Date</label>
      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="birth date" name='birth date' value={inputBirthDate} onChange={(e) => setInputBirthDate(e.target.value)} />

      <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Password" name='password' value={inputPassword} onChange={(e) => setInputPasssword(e.target.value)} />
 </div>

    <button onClick={handlerCreateUser} type="button" className="btn btn-primary">Save</button>



    </div>
  )
}

export default Signup