import React from "react"

import Link from "next/link"
import Image from "next/image"
import githubIcon from "/public/images/github.png"
import linkedinIcon from "/public/images/linkedin.svg"

export default function Footer() {
    return(
        <footer className="p-4">

            <div className="w-full flex flex-col items-center md:flex-row md:justify-between tracking-wide border-t-2 pt-4">

                {/* Copyright */}
                <div className="flex flex-1 justify-center md:justify-start p-4 md:p-0">

                    <p>Copyright © RobeeDS 2025</p>

                </div>

                {/* External Links */}
                <div className="flex flex-1 justify-center p-4 md:p-0">

                    {/* Github */}
                    <Link 
                        href='https://github.com/robeeds'
                        target="blank" 
                        className="p-2">
                        <Image 
                            src={githubIcon}
                            alt="Github"
                            width={32}
                            height={32}
                        />
                    </Link>

                    {/* LinkedIn */}
                    <Link 
                        href='https://www.linkedin.com/in/robeeds/'
                        target="blank"
                        className="p-2"
                    >
                        <Image
                            src={linkedinIcon}
                            alt="LinkedIn"
                            width={32}
                            height={32}
                        />
                    </Link>

                </div>

                {/* Back to top */}
                <div className="flex flex-1 justify-center md:justify-end p-4 md:p-0">

                    <Link href="#nav">Back to Top</Link>

                </div>
            </div>
            
            
            
        </footer>
    )
}