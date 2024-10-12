import Image from "next/image";
import landingIMG from "/public/images/landing.svg"

export default function Hero() {
    return (
      <div className="w-full flex flex-col md:flex-row items-center p-4">
        
        {/* This will be the landing text */}
        <div className="z-[5] flex flex-col flex-1">
            <div className="font-semibold">
                <p className="text-[48px]">
                    INNOVATE.
                    <br/>
                    ITERATE.
                </p>
                <p className="text-[48px] text-blue"> INTERFACE MASTERY. </p>
            </div>

            <p>Delivering full-cycle development with precision and flexibility.</p>
        </div>

        {/* This will be the landing image */}
        <div className="flex">

            <Image
                src={landingIMG}
                alt="Hand holding a growing plant"
                width={0}
                height={0}
                sizes="100h"
                priority={true}
                className="z-[5]"
            />

            {/* Background Gradients */}
            <div className='absolute z-[0] w-[30%] h-[40%] right-[30vw] green__gradient' />
            <div className='absolute z-[0] w-[30%] h-[40%] right-[20vw] white__gradient' />
            <div className='absolute z-[0] w-[30%] h-[40%] top-[25vh] right-[20vw] blue__gradient' />

        </div>

      </div>
    );
  }