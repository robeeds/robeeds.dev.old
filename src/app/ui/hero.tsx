import Image from "next/image";
import landingIMG from "/public/images/landing.svg"

export default function Hero() {
    return (
      <div className="z-[1] w-full flex flex-col md:flex-row items-center p-4">
        
        {/* Top(SM) Left(LG) Elements */}
        <div className="z-[4] flex flex-1 flex-col relative">

            {/* Background Gradient */}
            <div className='absolute z-[0] w-[30%] h-[40%] left-[0%] top-[50%] white__gradient' />
            
            {/* This will be the landing text */}
            <div className="font-semibold">
                <p className="text-[48px] lg:text-[64px]">
                    INNOVATE.
                    <br/>
                    ITERATE.
                </p>
                <p className="text-[48px] lg:text-[64px] md:text-nowrap text-blue"> INTERFACE MASTERY. </p>
            </div>

            <p>Delivering full-cycle development with precision and flexibility.</p>
        </div>

        {/* This will be the landing image */}
        <div className="flex flex-1 relative">

            <Image
                src={landingIMG}
                alt="Hand holding a growing plant"
                sizes="100h"
                priority={true}
                className="z-[4] flex flex-1"
            />

            {/* Background Gradients */}
            <div className='absolute z-[1] w-[30%] h-[40%] left-[20%] top-[17%] green__gradient' />
            <div className='absolute z-[0] w-[30%] h-[40%] right-[20%] top-[17%] white__gradient' />
            <div className='absolute z-[1] w-[30%] h-[40%] top-[25%] right-[20%] blue__gradient' />

        </div>

      </div>
    );
  }