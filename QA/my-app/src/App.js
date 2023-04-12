import React, {useState} from 'react'

import './App.css';

function App() {

  const [data, setData] = useState({
    fullName: "",    
    place: "",    
    age: "",    
    occupation: "",    
    gender: "",    
    email: "",
  })
  const handleSubmit = async(e) =>{
    e.preventDefault()
    const response =  await fetch('http://localhost:5000/api/register', {
      method: "POST",
      headers:{
        "Content-Type" :"application/json"
      },
      body: JSON.stringify(data)
    })
    const resData = await response.json()
    console.log(resData)
    if(resData === 'User registered successfully'){
      alert("User created successfully.");
  }
  }

  const handleInputChange =(e)=>{
    setData({...data, [e.target.name]: e.target.value})
  }

  return (
    <>
    <div className="container">
     <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={handleInputChange} name='email'/>
    <div id="email" className="form-text">We'll never share your email with anyone else.</div>
  </div> 
  <div className="mb-3">
    <label htmlFor="fullName" className="form-label">Full Name</label>
    <input type="text"  name='fullName' className="form-control" id="fullName" aria-describedby="emailHelp" onChange={handleInputChange}/>

  </div> <div className="mb-3">
    <label htmlFor="age" className="form-label">Age</label>
    <input type="number" name='age' className="form-control" id="age" aria-describedby="emailHelp" onChange={handleInputChange}/>
   
  </div> <div className="mb-3">
    <label htmlFor="occupation" className="form-label">Occupation</label>
    <input type="text" name='occupation' className="form-control" id="occupation" aria-describedby="emailHelp" onChange={handleInputChange}/>
    
  </div> 
  <div className="mb-3">
    <label htmlFor="place" className="form-label">Place</label>
    <input type="text" name='place'  className="form-control" id="place" aria-describedby="emailHelp" onChange={handleInputChange}/>

  </div> 
   <div className="mb-3">
    <label htmlFor="gender" className="form-label">Gender</label>
    <input type="text" name='gender' className="form-control" id="gender" aria-describedby="emailHelp" onChange={handleInputChange}/>

  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
    </>
  );
}

export default App;
