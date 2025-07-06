import React from 'react'
import CardContainer from './CardContainer'

function FeaturedWork() {
  return (
    <div id='work' className=' mt-12 px-4'>

      {/* What We Do Section */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className='text-3xl md:text-4xl font-bold mb-4'>What We Do</h1>
        <p className="text-gray-700 text-base md:text-lg">
          We design Shopify stores for clarity, conversion, and brand consistency. We focus on how buyers think and what drives action. Every element reduces friction and builds trust. The goal is a mobile-optimized, clean website that aligns with your brand and makes buying easy.
        </p>
      </div>

      {/* Our Featured Work Section */}
      <div className='flex justify-center w-full items-center text-center mb-6'>
        <h1 className='text-2xl md:text-4xl font-bold'>
          Our Featured <span className='text-[#853AFC]'>Work</span>
        </h1>
      </div>

      {/* Card Carousel */}
      <CardContainer />
    </div>
  )
}

export default FeaturedWork
