'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
 
export default function NotFound() {
  return (
    <div className='flex flex-1 flex-col items-center justify-center p-4'>

        {/* Error Message */}
        <p className='p-4'>404: Sorry! We couldn&apos;t find that page</p>
        <motion.button 
            className='bg-blue text-black px-4 py-2.5 rounded-full'
            whileHover={{ scale: 1.1 }}
        >
            <Link href='/' prefetch={false}>Return Home</Link>
        </motion.button>
    </div>
  )
}