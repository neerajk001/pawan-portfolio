'use client'

import React from 'react'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react';

interface args  {
  img: string
  title: string
  desc: string
  link: string
}

const sites = [
  {
    img: '/work1.png',
    title: 'Portfolio Website',
    desc: 'A fast and clean portfolio built with Next.js and Tailwind CSS.',
    link: 'https://your-site.com',
  },
  {
    img: '/work2.png',
    title: 'Ecommerce Store',
    desc: 'A modern Shopify store optimized for conversions.',
    link: 'https://ecom-example.com',
  },
  {
    img: '/work3.png',
    title: 'Blog Platform',
    desc: 'A minimalist blog built for performance and readability.',
    link: 'https://blog-platform.com',
  },
  {
    img: '/work4.png',
    title: 'Marketing Site',
    desc: 'Landing page for product showcasing built for speed.',
    link: 'https://marketing-site.com',
  },
  {
    img: '/work5.png',
    title: 'Dashboard UI',
    desc: 'Clean and functional admin dashboard with data viz.',
    link: 'https://dashboard-ui.com',
  },
]

function SiteCard({ img, title, desc, link }:args) {
  return (
    <div className="bg-white min-w-[300px] max-w-[300px] rounded-xl shadow-md border border-gray-200 overflow-hidden  flex flex-col">
      {/* Image */}
      <div className="relative w-full h-36">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover rounded-md"
        />
      </div>

      {/* Text content */}
      <div className="mt-1 flex-grow p-1">
        <div className='flex items-center space-x-2'><h2 className="text-lg font-semibold">{title}</h2>
        <a href={link} target="_blank" rel="noopener noreferrer">
  <ExternalLink size={15} className='text-blue-600'/>
</a>
        </div>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>

      {/* Button */}
      
    </div>
  )
}

function CardContainer() {
  return (
    <div className="w-full overflow-x-auto scroll-smooth scrollbar-hide">
      <div className="flex gap-6 w-max px-2">
        {sites.map((site, index) => (
          <SiteCard key={index} {...site} />
        ))}
      </div>
    </div>
  )
}

export default CardContainer
