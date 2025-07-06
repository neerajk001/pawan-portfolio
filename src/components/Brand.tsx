'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'


const logos = [
  '/logo1.png',
  '/logo3.png',
  '/logo4.png',
  '/logo5.png',
  '/logo6.png',
  '/logo7.png',
  '/logo8.png',
]

function Brand() {
  return (
    <div className=' mt-12 '>
      {/* Heading */}
      <div className='flex justify-center items-center flex-col '>
      <Image src='/untitled.png'
      alt='nari'
      width={300}
      height={250}
      />
      <h1 className='text-md font-semibold'>Trusted by 40+ D2C Brands</h1>
      </div>
      

      {/* Carousel */}
      <div className='overflow-hidden mt-3 '>
        <motion.div
          className='flex gap-12'
          animate={{ x: ['0%', '-100%'] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: 'linear',
          }}
        >
          {[...logos, ...logos].map((src, index) => (
            <div key={index} className='flex-shrink-0'>
              <Image 
                src={src}
                alt={`logo-${index}`}
                width={150}
                height={100}
                className='object-contain '
              />
            </div>
          ))}
        </motion.div>
        
      </div>
      
      
    </div>
  )
}

export default Brand
