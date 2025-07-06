import React from 'react'

function Hero() {
  return (
    <div id='home' className='flex justify-center items-center max-h-screen mt-18 px-4'>
      <div className=' space-y-2 text-center'>
        <h1 className='hidden md:flex text-5xl font-bold leading-normal'>
          We Design High-Converting <br /> Shopify website for D2C Brands
        </h1>
        <h1 className='md:hidden text-4xl font-bold leading-normal'>
          We build  High-Converting Shopify website for D2C Brands
        </h1>
        <p className='text-black  text-lg md:text-2xl'>
          From idea to launch we build sleek fast <br /> and conversion-focused websites
        </p>
        <button className='bg-yellow-300 px-8 py-3 text-lg rounded-full mt-3 text-black font-semibold'>
          Lets work together
        </button>
      </div>
    </div>
  )
}

export default Hero
