'use client'

import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { navLinks } from "../constants/constants.js"
import { useState, useEffect } from "react";
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
    
    // Toggle state for Mobile Sidebar
    const [isOpen, setIsOpen] = useState(false);
    const containerControls = useAnimationControls();
    
    useEffect(() => {
        if(isOpen) {
            containerControls.start("open")
        } else {
            containerControls.start("close")
        }
    }, [isOpen, containerControls]);

    const handleOpenClose = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="w-full">

            <div className="flex flex-row justify-between px-4">

                {/* Logo and name on the left*/}
                <div className="flex flex-row items-center py-4">
                    <Image
                        src="/images/logo.png"
                        width={32}
                        height={32}
                        alt="RobeeDS Logo"
                    />
                    <p className="px-2 text-dimWhite">robeeds</p>
                </div>

                {/* For Large Screens, Links on Right */}
                <div className="hidden md:flex flex-row items-center py-4">
                    {navLinks.map((link, index) => {
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                            >
                                <motion.p
                                    whileHover={{ scale: 1.1 }}
                                    className={`${index === navLinks.length - 1 ? 'bg-blue text-black px-4 py-2.5 rounded-full' : 'text-gray hover:text-white pr-6'}`}>
                                    {link.name}
                                </motion.p>
                            </Link>
                        );
                    })}
                </div>

                {/* For Mobile Screens, Links in Dropdown */}
                <motion.div 
                    variants={containerVariants}
                    animate={containerControls}
                    initial="close"
                    className={`z-[5] flex flex-col gap-3 md:hidden py-4 ${isOpen ? 'absolute right-0 h-full bg-black' : ''}`}
                >
                    {/* Dropdown Button */}
                    <button aria-label='Navigation Button' onClick={() => handleOpenClose()} className={isOpen ? 'px-2': "pr-2"}>
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
                                    <p className={`${index === navLinks.length - 1 ? 'bg-blue text-black px-4 py-2.5 rounded-full' : ''}`}>{link.name}</p>
                                </Link>
                            );
                        })}
                    </div>

                    
                    
                </motion.div>

            </div>


        </nav>
    )
}