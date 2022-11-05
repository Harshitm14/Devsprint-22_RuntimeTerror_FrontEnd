import React from 'react'
import kevents from "../kevents.png"

const Navbar = () => {
  return (
      
    <nav className='flex flex-col md:flex-row justify-between h-20 bg-gradient-to-b from-zinc-500 to-zinc-900'>
        
        <div>
          <img className='h-20' src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/KIIT_logo.svg/1200px-KIIT_logo.svg.png" alt="Kiit"></img>
      
          </div>
        
        
        <div> 
        <img class="h-20 " src= {kevents} alt="kiitlogo">
          </img>
        </div>
        
        
        <div>
        <img class="h-12 w-15 " src="https://devsprint.dsckiit.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.37eabc0a.png&w=3840&q=75" alt="Devsprint"></img>
        </div>
        
    </nav>
  )
}

export default Navbar