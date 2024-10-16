export default function Contact() {
    return(
        <div id="contact" className="flex flex-col md:flex-row contact-card rounded-[2.5vw] p-4 m-4">
            {/* (SM)Top (LG)Left */}
            <div className="flex flex-col justify-center p-4 md:min-w-[50%]">
                <p className="font-semibold text-[48px] text-white">Let's Talk</p>
                <p className="font-medium md:text-[24px]">Are you ready to bring your vision to life? Fill out the form to get in touch with me, and let's discuss how we can work together.</p>
            </div>

            {/* (SM)Bot (LG)Right */}
            <div className="flex flex-col justify-center p-4 md:min-w-[50%] border-white">
                <form className="border-t-2 md:border-t-0 md:border-l-2 md:p-4" action="https://send.pageclip.co/ZHvMZSYcBnzvTOkNnWViIJjQRMKksyTc" method="post">

                    {/* This is the name field */}
                    <p className='text-white font-medium pt-2.5 pb-1'>Name</p>
                    <input type='name' name='name' className='w-full p-1.5 mb-1 rounded-md bg-transparent border-[1px]' autoComplete="on" required />

                    {/* This is the email field */}
                    <p className='text-white font-medium pt-2.5 pb-1'>Email</p>
                    <input type='email' name='email' className='w-full p-1.5 mb-1 rounded-md bg-transparent border-[1px]' autoComplete="on" required />

                    {/* This is the message field */}
                    <p className='text-white font-medium pt-2.5 pb-1'>Message</p>
                    <input type='text' name='message' className='w-full p-1.5 mb-1 rounded-md bg-transparent border-[1px]' required />

                    {/* Send Button */}
                    <button className='bg-blue text-black px-6 py-2.5 mt-4 rounded-full max-w-[90px]'>Send</button>

                </form>
            </div>
        </div>
    )
}