import React from 'react'

const Forms = () => {
  return (
    <body class="h-screen bg-gradient-to-b from-blue-500 to-blue-200">
    <div className='flex flex-col md:flex-row absolute text-center w-full content-between bg-gray-300 justify-evenly items-center rounded-3xl border-black top-[25%]'>

      <div className='form frm1'>
        <p className='label lbl1'>Sign Up</p>
        
        <form className='flex flex-col space-y-2 mt-4 md:mt-0 w-fit mx-auto'>
          <div className='flex space-x-2'>
          <input className='contactInput' placeholder='First Name'/>
          <input className='contactInput' placeholder='Last Name'/>
          </div>
          <input className='contactInput' type="text" placeholder='Email'/>
          <input className='contactInput' type="text" placeholder='Password'/>
          <input className='contactInput' type="text" placeholder='Roll No./Faculty ID'/>
          <input className='contactInput' type="text" placeholder='School affiliated to e.g CSE/IT..'/>
          <input className='contactInput' type="text" placeholder='Designation (optional)'/>
          
          <button class="bg-gray-200 hover:bg-rose-300 text-black font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-full">
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
