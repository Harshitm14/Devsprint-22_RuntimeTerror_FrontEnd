import React, { useState } from 'react'

const Forms = () => {
  const [FirstName, setFirstName] = useState('');
  const [Role, setRole] = useState(true);
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ID, setID] = useState('');
  const [School, setSchool] = useState('');
  const [Designation, setDesignation] = useState('');
  const [LoginEmail, setLoginEmail] = useState('');
  const submit=async e=>{
    e.preventDefault()
    console.log("hello")
    const res = await fetch('https://Devsprint22.annnesha.repl.co/kevents/register',{
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify ({
        FirstName,
        LastName,
        Email,
        Password,
        ID,
        School,
        Designation
      })
    })
    const data = await res.json();
    console.log(data);
  }


  const Forms = () => {
    
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [LoginEmail, setLoginEmail] = useState('');
    const submit=async e=>{
      e.preventDefault()
      console.log("hello")
      const res = await fetch('https://Devsprint22.annnesha.repl.co/kevents/register',{
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify ({
          Email,
          Password
        })
      })
      const data = await res.json();
      console.log(data);
    }
  }
  return(
    <body class="h-screen bg-gradient-to-b from-blue-500 to-blue-200">
    <div className='flex flex-col md:flex-row absolute text-center w-full content-between bg-gray-300 justify-evenly items-center rounded-3xl border-black top-[25%]'>

      <div className='form frm1'>
        <p className='label lbl1'>Sign Up</p>
        
        <form onSubmit={submit} className='flex flex-col space-y-2 mt-4 md:mt-0 w-fit mx-auto'>
          <div className='flex space-x-2'>
          <input className='contactInput' placeholder='First Name' required onChange={e=>{
            setFirstName(e.target.value);
          }}/>
          <input className='contactInput' placeholder='Last Name' onChange={e=>{
            setLastName(e.target.value);
          }}/>
          </div>
          <input className='contactInput' type="text" placeholder='Email' required onChange={e=>{
            setEmail(e.target.value);
          }}/>
          <select className='contactInput' value={Role} onChange={e=>setRole(e.target.value)}>
            <option value={true}>Student</option>
            <option value={false}>Teacher</option>
          </select>
          <input className='contactInput' type="text" placeholder='Password' required onChange={e=>{
            setPassword(e.target.value);
          }}/>
          <input className='contactInput' type="text" placeholder='Roll No./Faculty ID' required onChange={e=>{
            setID(e.target.value);
          }}/>
          <input className='contactInput' type="text" placeholder='School affiliated to e.g CSE/IT..' required onChange={e=>{
            setSchool(e.target.value);
          }}/>
          <input className={`contactInput ${Role==true?'hidden':'block'}`} type="text" placeholder='Designation (optional)' onChange={e=>{
            setDesignation(e.target.value);
          }}/>
          
          <button type='submit' className="bg-gray-200 hover:bg-rose-300 text-black font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-full">
  Submit
</button>

        
        </form>
      </div>
    
      <div className='form frm2'>
        <p className='label lbl2'>Login</p>
        
        <form className='flex flex-col space-y-2 mt-4 md:mt-0 w-fit mx-auto'>
          <input className='contactInput' type="text" placeholder='Email'/>
          <input className='contactInput' type="text" placeholder='Password'/>
          <button class="bg-gray-200 hover:bg-rose-300 text-black font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-full">

  Apply
</button>
        </form>
      </div>
    </div>
    </body>
  )
}

export default Forms
