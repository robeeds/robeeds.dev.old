'use client'

import { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { navLinks } from "../constants/constants.js"
import { useEffect } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const containerVariants = {
    close: {
        width: "1.5rem",
        transition: {
            type: "spring",
            damping: 15,
            duration: 0.5,
        },
    },
    open: {
        width: "16rem",
        transition: {
            type: "spring",
            damping: 15,
            duration: 0.5,
        },
    }
}

export default function NavBar() {
    
    // 
    const [isOpen, setIsOpen] = useState(false)
    const containerControls = useAnimationControls()
    
    useEffect(() => {
        if(isOpen) {
            containerControls.start("open")
        } else {
            containerControls.start("close")
        }
    }, [isOpen])

    const handleOpenClose = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="w-full">

            {/* For Large Screens */}
            <div className="flex flex-row justify-between p-4">

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

                {/* For Large Screens, Links on Right */}
                <div className="hidden md:flex flex-row items-center">
                    {navLinks.map((link, index) => {
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`px-3`}
                            >
                                <p className={`${index === navLinks.length - 1 ? 'bg-blue text-black px-4 p-2.5 rounded-full' : ''}`}>{link.name}</p>
                            </Link>
                        );
                    })}
                </div>

                {/* For Mobile Screens, Links in Dropdown */}
                <motion.div 
                    variants={containerVariants}
                    animate={containerControls}
                    initial="close"
                    className={`flex flex-col gap-3 md:hidden ${isOpen ? 'absolute bg-black right-0 h-full' : ''}`}
                >
                    {/* Dropdown Button */}
                    <button onClick={() => handleOpenClose()}>
                        {isOpen ? (
                            <XMarkIcon height={32} width={32}/>
                        ) : (
                            <Bars3Icon height={32} width={32}/>
                        )}
                    </button>

                    {/* Navigation Links */}
                    <div className={isOpen ? 'flex flex-col gap-3 px-2 text-center' : 'hidden'}>
                        {navLinks.map((link, index) => {
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                >
                                    <p className={`${index === navLinks.length - 1 ? 'bg-blue text-black px-4 p-2.5 rounded-full' : ''}`}>{link.name}</p>
                                </Link>
                            );
                        })}
                    </div>

                    
                    
                </motion.div>

            </div>


        </nav>
    )
}