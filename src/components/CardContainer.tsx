'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'

interface args {
  img: string
  title: string
  desc: string
  
}

const sites: args[] = [
  {
    img: '/work2.png',
    title: 'GDDB',
    desc: 'Womens clothing brand.',
    
  },
  {
    img: '/work1.png',
    title: 'NIDA',
    desc: 'Womens clothing brand.',
    
  },
  {
    img: '/work4.png',
    title: 'ASHWEAR',
    desc: 'Gifting & Accessories Brand.',
    
  },
  {
    img: '/work5.png',
    title: 'ALPHA & OMEGA',
    desc: 'culture-driven Clothing brand.',
    
  },
  {
    img: '/work3.png',
    title: 'BYG',
    desc: 'Hot Wheels Diecast Organizers.',
    
  },
]

function SiteCard({ img, title, desc, }: args) {
  return (
    <div className="min-w-[300px] max-w-[300px] rounded-xl  overflow-hidden flex flex-col  ">
      <div className="relative w-full h-36">
        <Image src={img} alt={title} fill className="object-cover rounded-md" />
      </div>

      <div className="mt-1 flex-grow p-2">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  )
}

function CardContainer() {
  const controls = useAnimation()
  const repeated = [...sites, ...sites] // Duplicate for loop

  useEffect(() => {
    controls.start({
      x: ['0%', '-50%'],
      transition: {
        repeat: Infinity,
        duration: 40,
        ease: 'linear',
      },
    })
  }, [controls])

  const handlePause = () => {
    controls.stop()
  }

  const handleResume = () => {
    controls.start({
      x: ['0%', '-50%'],
      transition: {
        repeat: Infinity,
        duration: 20,
        ease: 'linear',
      },
    })
  }

  return (
    <div
      className="w-full overflow-hidden py-4"
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
    >
      <motion.div className="flex gap-6 w-max" animate={controls}>
        {repeated.map((site, index) => (
          <SiteCard key={index} {...site} />
        ))}
      </motion.div>
    </div>
  )
}

export default CardContainer
