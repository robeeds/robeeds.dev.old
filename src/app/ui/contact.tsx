'use client'
import { motion } from "framer-motion"

export default function Contact() {
    return(
        <div id="contact" className="flex flex-col md:flex-row contact-card rounded-[2.5vw] p-4 m-4">
            {/* (SM)Top (LG)Left */}
            <div className="flex flex-col justify-center p-4 md:min-w-[50%]">
                <p className="font-semibold text-[48px] text-white">Let&apos;s Talk</p>
                <p className="font-medium md:text-[24px]">Are you ready to bring your vision to life? Fill out the form to get in touch with me, and let&apos;s discuss how we can work together.</p>
            </div>

            {/* (SM)Bot (LG)Right */}
            <div className="flex flex-col justify-center p-4 md:min-w-[50%] border-white">
                <form className="md:p-4" action="https://send.pageclip.co/ZHvMZSYcBnzvTOkNnWViIJjQRMKksyTc" method="post">

                    {/* This is the name field */}
                    <p className='text-white font-medium pt-2.5 pb-1'>Name</p>
                    <input type='text' name='name' aria-label='Name Field' className='w-full p-1.5 mb-1 rounded-md bg-transparent border-[1px]' autoComplete="on" required />

                    {/* This is the email field */}
                    <p className='text-white font-medium pt-2.5 pb-1'>Email</p>
                    <input type='text' name='email' aria-label='Email Field' className='w-full p-1.5 mb-1 rounded-md bg-transparent border-[1px]' autoComplete="on" required />

                    {/* This is the message field */}
                    <p className='text-white font-medium pt-2.5 pb-1'>Message</p>
                    <textarea name='message' aria-label='Message Field' className="w-full min-h-20 p-1.5 rounded-md bg-transparent border-[1px]" required />
                    

                    {/* Send Button */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        className='bg-blue text-black px-6 py-2.5 mt-2 rounded-full max-w-[90px]'
                    >
                        Send
                    </motion.button>

                </form>
            </div>
        </div>
    )
}