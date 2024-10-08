'use client'

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { 
        name: 'home', 
        href: '/',
    },
    {
        name: 'about',
        href: '#about',
    },
    {
        name: 'blog',
        href: '/blog',
    },
    {
        name: 'portfolio',
        href: '#portfolio',
    }, 
    {
        name: 'contact',
        href: '#contact',
    },
];

export default function NavLinks() {
    const pathname = usePathname();
    const [toggle, setToggle] = useState(false);

    return (
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
    )
}

