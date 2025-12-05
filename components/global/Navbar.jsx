"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


export default function Navbar(){

    const [activeLink , setActiveLink ] = useState("Home");

    const navItems = [
        { name: 'Home', href: '/'},
        { name: 'Our services', href: '/services' },
        { name: 'Who we are', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact Us', href: '/contact' }
    ]

    return(
        <nav className="w-full md:h-[94px] bg-[#F5F5F5] z-50 flex justify-between md:px-14 items-center mx-auto">
              <div>
                    <Link href="/" className="flex items-center">
                    <Image
                        src="/orbiz_logo.png"
                        alt="Company Logo"
                        width={120}
                        height={60}
                    />
                    </Link>
                </div>
                <div className="flex gap-8 item-center">
                    {navItems.map((item) => (
                            <button
                            key={item.name}
                            onClick={() => setActiveLink(item.name)}
                            className={`${
                    activeLink === item.name 
                      ? 'nav-active-text px-4 py-2'
                      : 'nav-text'
                  }`}>
                                {item.name}
                            </button>
                        ))}

                </div>
        </nav>
    );
}