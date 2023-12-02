import React from 'react'

const Signup = () => {
  return (
    <div>
         <div className="mb-3 contactForm">
      <label for="exampleFormControlInput1" className="form-label">Name</label>
      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" name='full_name' value={inputNewName} onChange={(e) => setInputNewName(e.target.value)} />

      <label for="exampleFormControlInput1" className="form-label">Email</label>
      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="email" name='email' value={inputNewEmail} onChange={(e) => setInputNewEmail(e.target.value)} />

      <label for="exampleFormControlInput1" className="form-label">Address</label>
      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="address" name='phone' value={inputNewPhone} onChange={(e) => setInputNewPhone(e.target.value)} />

      <label for="exampleFormControlInput1" className="form-label">Birth Date</label>
      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="birth Day" name='address' value={inputNewAddress} onChange={(e) => setInputNewAddress(e.target.value)} />

      <label for="exampleFormControlInput1" className="form-label">Paassword</label>
      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Password" name='address' value={inputNewAddress} onChange={(e) => setInputNewAddress(e.target.value)} />
    </div>


    </div>
  )
}

export default Signup