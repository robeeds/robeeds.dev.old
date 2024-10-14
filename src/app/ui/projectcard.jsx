'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ProjectCard = ({ title, num, langs, content, img, link }) => {
  return (
    <div className={`w-full flex flex-col md:flex-row p-4 ${num % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
        
        {/* Image */}
        <Image 
          src={img} 
          alt='Project Preview' 
          className='flex flex-1 md:max-w-[55%] rounded-[3vw]'
        />

        {/* Project Description */}
        <div className='md:p-4'>
            <p className='font-semibold text-white text-[36px]'>{title}</p>
            <p className='text-gray'>{langs.join(" | ")}</p>
            <p className='text-gray'>{content}</p>

            {/* Button */}
            <div className='flex py-2'>
                <Link 
                  href={link} 
                  target='blank'
                >
                  <motion.p 
                    whileHover={{scale: 1.1}}
                    className='bg-blue text-black py-2.5 px-6 rounded-full'>
                    Visit
                  </motion.p>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default ProjectCard