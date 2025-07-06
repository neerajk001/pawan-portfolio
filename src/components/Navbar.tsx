'use client'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      {/* NAVBAR */}
      <div className="sticky top-0 z-50 px-3 py-4">
        <div className="bg-white backdrop-blur-2xl rounded-full shadow-md flex items-center justify-between py-4 px-6">
          <div className="font-bold text-lg">pawan giri</div>

          <div className="hidden md:flex justify-between gap-10">
            <h1>Home</h1>
            <h1>Our Process</h1>
            <h1>Our Work</h1>
            <h1>Contact</h1>
          </div>

          <button className="md:hidden cursor-pointer" onClick={toggleMenu}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white border-b border-gray-200 z-30 flex flex-col justify-center items-center space-y-6 text-xl font-semibold">
          <h1>Home</h1>
          <h1>Our Process</h1>
          <h1>Our Work</h1>
          <h1>Contact</h1>
        </div>
      )}
    </div>
  )
}

export default Navbar