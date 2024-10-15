import React from 'react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type CardProps = {
    lang: string;
    img: string | StaticImport;
}

const TechnologyCard = ({ lang, img }: CardProps) => {
  return (
    <div className='flex flex-col items-center md:p-4'>
        <p className='font-semibold text-[24px] text-dimWhite'>{lang}</p>
        <Image 
          src={img} 
          alt={lang} 
          width={0}
          height={0}
          sizes='100w'
          className='min-w-[100px] min-h-[100px]'/>
    </div>
  )
}

export default TechnologyCard