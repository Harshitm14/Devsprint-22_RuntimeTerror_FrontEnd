import {React, useState } from 'react'
// import { json } from 'react-router-dom';

const Teacher =() => {
  const [Title, setTitle] = useState('');
  const [Organizer, setOrganizer] = useState('');
  const [Name, setName] = useState('');
  const [Roll, setRoll] = useState(0);
  const [Branch, setBranch] = useState('');
  const [School, setSchool] = useState('');
  const [Desc, setDesc] = useState('');
  const [Venue, setVenue] = useState('');
  const [StartDate, setStartDate] = useState('');
  const [EndDate, setEndDate] = useState('');
  const [StartTime, setStartTime] = useState('');
  const [EndTime, setEndTime] = useState('');
  const [Room, setRoom] = useState('');
  const [Remarks, setRemarks] = useState('');
  const [Status, setStatus] = useState('');
  const submit=async e=>{
    e.preventDefault()
    await fetch('',{
      method:'GET',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify ({
        Title,
        Organizer,
        Name,
        Roll,
        Branch,
        School,
        Desc,
        Venue,
        StartDate,
        EndDate,
        StartTime,
        EndTime,
        Room,
        Remarks,
        Status
        
      })
    })
  }
  return(
    <body class="h-screen bg-gradient-to-b from-blue-500 to-blue-200">
    <div className='flex flex-col md:flex-row absolute text-center w-full content-between bg-gray-300 justify-evenly items-center rounded-3xl border-black top-[25%]'>

      <div className='form frm1'>
        <p className='label lbl1'>Approval Portal</p>
        
        <form onSubmit={submit} className='flex flex-col space-y-2 mt-4 md:mt-0 w-fit mx-auto'>
          <div className='flex space-x-2'>
            {Name}
          <input className='contactInput' placeholder='Title' required onChange={e=>{
            setTitle(e.target.value);
          }}/>
          <input className='contactInput' placeholder='Organizer' onChange={e=>{
            setOrganizer(e.target.value);
          }}/>
          </div>
          <input className='contactInput' type="text" placeholder='Name' required onChange={e=>{
            setName(e.target.value);
          }}/>
          <input className='contactInput' type="text" placeholder='Roll' required onChange={e=>{
            setRoll(e.target.value);
            }}/>
          <input className='contactInput' type="text" placeholder='Branch' required onChange={e=>{
            setBranch(e.target.value);
          }}/>
          <input className='contactInput' type="text" placeholder='School' required onChange={e=>{
            setSchool(e.target.value);
          }}/>
          <input className='contactInput' type="text" placeholder='Desc' required onChange={e=>{
            setDesc(e.target.value);
          }}/>
           <input className='contactInput' type="text" placeholder='Venue' required onChange={e=>{
            setVenue(e.target.value);
          }}/>
           <input className='contactInput' type="text" placeholder='StartDate' required onChange={e=>{
            setStartDate(e.target.value);
          }}/>
           <input className='contactInput' type="text" placeholder='EndDate' required onChange={e=>{
            setEndDate(e.target.value);
          }}/>
           <input className='contactInput' type="text" placeholder='StartTime' required onChange={e=>{
            setStartTime(e.target.value);
          }}/>
           <input className='contactInput' type="text" placeholder='EndTime' required onChange={e=>{
            setEndTime(e.target.value);
          }}/>
          
          
          <button type='submit' className="bg-gray-200 hover:bg-rose-300 text-black font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-full">
  Submit
</button>

            
        
        </form>
      </div>
    
      
    </div>
    </body>
  )
}
export default Teacher;
