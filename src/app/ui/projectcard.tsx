'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

type ProjectProps = {
  title: string,
  num: number,
  langs: string[],
  content: string,
  img: string | StaticImport,
  link: string,
}

const ProjectCard = ({ title, num, langs, content, img, link }: ProjectProps) => {
  return (
    <div className={`w-full flex flex-col md:flex-row p-4 ${num % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
        
        {/* Image */}
        <Image 
          src={img} 
          alt='Project Preview' 
          className='flex flex-1 md:w-[55%] rounded-[2.5vw]'
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