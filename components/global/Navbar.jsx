"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";


export default function Navbar() {

    const pathname = usePathname();
    const router = useRouter();

    const [activeLink, setActiveLink] = useState("Home");
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Our services', href: '/services' },
        { name: 'Who we are', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact Us', href: '/contact' }
    ];

    useEffect(() => {
        if (pathname === "/") { setActiveLink("Home"); }
        else if (pathname === "/services") { setActiveLink("Our services"); }
        else if (pathname === "/about") { setActiveLink("Who we are"); }
        else if (pathname === "/careers") { setActiveLink("Careers"); }
        else if (pathname === "/contact") { setActiveLink("Contact Us"); }
        setMenuOpen(false);
    }, [pathname]);

    const handleNavClick = (item) => {
        setActiveLink(item.name);
        router.push(item.href);
    }

    return (
        <nav className="w-[90vw]  md:w-full md:h-[94px] bg-[#F5F5F5] py-3 fixed z-[80] left-1/2 -translate-x-1/2 flex justify-between rounded-[12px] md:rounded-none items-center container-padding ">
           

            <div>
                <Link href="/" className="flex items-center">
                    <Image
                        src="/orbiz_logo.png"
                        alt="Orbiz"
                        width={120}
                        height={60}
                    />
                </Link>
            </div>

            <div className="hidden md:flex gap-8 item-center ">
                {navItems.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => handleNavClick(item)}
                        className={`${activeLink === item.name
                                ? 'nav-active-text px-4 py-2'
                                : 'nav-text'
                            }`}>
                        {item.name}
                    </button>
                ))}

            </div>
            <button
                className="md:hidden flex flex-col gap-1"
                onClick={() => setMenuOpen(!menuOpen)}>
            
                <span className="block w-6 h-[2px] bg-[#1A2B6D]"></span>
                <span className="block w-6 h-[2px] bg-[#1A2B6D]"></span>
                <span className="block w-6 h-[2px] bg-[#1A2B6D]"></span>
            </button>


            {menuOpen && (
                <div className="absolute top-[70px] left-0 w-full bg-[#F5F5F5]  rounded-[12px] flex flex-col gap-3 py-6 px-8 md:hidden">
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => handleNavClick(item)}
                            className={`text-left  w-full ${activeLink === item.name ? "nav-active-text" : "nav-text"
                                }`}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
}