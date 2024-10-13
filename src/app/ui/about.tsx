import Image from "next/image";
import headshot from "/public/images/headshot.png"
import { head } from "framer-motion/client";


export default function About() {
  return (
    <div id="about" className="z-[1] flex flex-col md:flex-row-reverse items-center justify-between p-4">
    

        {/* Top(SM) Right(LG) Section */}
        <div className="relative flex flex-col md:p-4 md:m-4 md:border-l-2">
            
            {/* Title */}
            <p className="flex text-nowrap font-semibold text-[48px] ">I'm Robee D.</p>

            {/* Description */}
            <p>I'm Robee, a college student with a passion for full-stack development. Specializing in crafting captivating digital experiences, I'm your go-to person for all things creative and tech-savvy.</p>
        </div>

        {/* Bottom(SM) Left{LG} Section */}
        <div className="flex relative">

            {/* This will be the developer's professional headshot */}
            <Image
                src={headshot}
                alt="Professional Headshot"
                width={0}
                height={0}
                priority={true}
                className="z-[4] md:p-4 lg:max-w-[600px]"
            />

            {/* Background Gradient */}
            <div className='absolute z-[0] w-[30%] h-[40%] right-[40%] top-[20%] white__gradient' />

        </div>

        


    </div>
  );
}
