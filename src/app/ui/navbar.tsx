'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { navLinks } from "../constants/constants.js"
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function NavBar() {
    //Toggle for sidenav on mobile
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="w-full max-w-[1440px]">

            {/* For Large Screens */}
            <div className="hidden md:flex flex-row justify-between p-4 ">

                {/* Logo and name on the left*/}
                <div className="flex flex-row items-center">
                    <Image
                        src="/images/logo.png"
                        width={32}
                        height={32}
                        alt="RobeeDS Logo"
                    />
                    <p className="px-2">robeeds</p>
                </div>

                {/* Links on the right */}
                <div className="flex flex-row items-center">
                    {navLinks.map((link, index) => {
                        return(
                            <Link 
                                key={link.name}
                                href={link.href}
                                className={`px-3`}
                            >
                                <p className={`${index === navLinks.length - 1 ? 'bg-blue text-black px-4 p-2.5 rounded-full': ''}`}>{link.name}</p>
                            </Link>
                        );
                    })}
                </div>
                
            </div>

            {/* For Mobile */}
            <div className="md:hidden flex flex-row justify-between p-4">

                {/* Logo and name on the left */}
                <div className="flex flex-row items-center">
                    <Image
                        src="/images/logo.png"
                        width={32}
                        height={32}
                        alt="RobeeDS Logo"
                    />
                    <p className="px-2">robeeds</p>
                </div>

                {/* Toggle on Click */}
                <div 
                    className="w-[32px] h-[32px]"
                    onClick={() => setToggle((prev) => !prev)}
                >

                    {toggle ? <XMarkIcon /> : <Bars3Icon />}

                </div>

                {/* Sidebar Display */}
                <div className={`${toggle ? 'flex' : 'hidden'} absolute right-0 top-[40px]`}>
                    <div className="">
                        {navLinks.map((link, index) => {
                            return(
                                <Link 
                                    key={link.name}
                                    href={link.href}
                                    className={`px-3`}
                                >
                                    <p className={`${index === navLinks.length - 1 ? 'bg-blue text-black px-4 p-2.5 rounded-full': ''}`}>{link.name}</p>
                                </Link>
                            );
                        })}
                    </div>
                </div>

            </div>


        </nav>
    )
}