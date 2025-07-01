'use client'
import {Menu,X} from 'lucide-react'
 
import { useState } from 'react'

function Navbar() {
    const [isOpen  ,setIsOpen] =useState(false)

        const toggleMeenu =()=>{
            setIsOpen(!isOpen)
        }
  return (
    <div>
  {/* NAVBAR - always visible */}
  <div className="px-3 py-4">
    <div className="bg-gray-200 sticky top-0 z-50 rounded-full shadow flex items-center justify-between py-4 px-6">
      <div>
        pawan giri
      </div>
      <div className='hidden   md:flex justify-between gap-10 '>
            <h1>Home</h1>
            <h1>our process</h1>
            <h1>our work</h1>
            <h1>contact</h1>

      </div>
      <button className="md:hidden cursor-pointer" onClick={toggleMeenu}>
        {isOpen ? <X /> : <Menu />}
      </button>
    </div>
  </div>

  {/* MENU - overlays content, conditionally rendered */}
  {isOpen && (
  <div className='fixed top-0 left-0 w-full h-[460px] bg-white border border-gray-300 z-30 flex flex-col justify-between'>
    
    {/* Top content */}
    <div className='px-4 pt-12 text-center'>
      <p className='mt-16  text-gray-500 flex mx-6  justify-items-start text-4xl font-bold  ' >
        Lets take your <br /> brand global
      </p>
    </div>

    {/* Bottom Button */}
    <div className='flex justify-start mx-12 mb-6'>
      <button className='bg-[#853AFC] px-16 py-2 rounded-full text-white'>
        Get in Touch
      </button>
    </div>
  </div>
)}

</div>

  )
}

export default Navbar