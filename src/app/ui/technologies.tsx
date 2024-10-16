import React from 'react'
import TechnologyCard from './technologycard'
import { techInfo } from '../constants/constants'

const Technologies = () => {
  return (
    <div className='w-full flex flex-col items-center p-4'>
        {/* Technologies */}
        <p className='font-semibold text-[36px] md:text-[48px]'>TECHNOLOGIES</p>
        <div className='w-full flex flex-wrap justify-evenly'>
            {techInfo.map((index, id) => 
                <TechnologyCard key={id} {...index} />
            )}
        </div>
    </div>
  )
}

export default Technologies