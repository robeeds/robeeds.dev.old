import Image from "next/image"
import NavLinks from "./navlinks"
//import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function NavBar() {

    return (
        //This is the navbar
        <div className="flex flex-row items-center justify-between py-4 px-4">

            {/* Logo */}
            <div className="">
                <Image
                    src="/images/logo.png"
                    width={32}
                    height={32}
                    alt="RobeeDS Logo"
                />
            </div>
            

            {/* Move this to the right */}
            <div className="flex flex-row">
                <NavLinks />
            </div>
        </div>
    )
}