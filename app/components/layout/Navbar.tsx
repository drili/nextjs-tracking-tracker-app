"use client"

import { useState } from "react";

interface NavbarProps {
    logoText: string;
}

const Navbar: React.FC<NavbarProps> = ({ logoText }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-white text-slate-900 p-4 flex justify-between items-center max-w-screen-xl m-auto relative">
            <div className="text-xl font-bold uppercase">
                {logoText}
            </div>

            <div className="hidden md:flex space-x-4">
                <a href="#home" className="hover:text-slate-700 font-bold uppercase text-sm">Home</a>
                <a href="#about" className="hover:text-slate-700 font-bold uppercase text-sm">Menu Link 2</a>
                <a href="#contact" className="hover:text-slate-700 font-bold uppercase text-sm">Menu Link 3</a>
            </div>

            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>

            {isOpen && (
                <div className="absolute top-full right-0 bg-white shadow-md py-3 px-5 flex flex-col items-end md:hidden w-full">
                    <a href="#home" className="block py-1 hover:text-slate-700 font-bold uppercase text-sm">Home</a>
                    <a href="#Menu Link2" className="block py-1 hover:text-slate-700 font-bold uppercase text-sm">Menu Link 2</a>
                    <a href="#Menu Link 3" className="block py-1 hover:text-slate-700 font-bold uppercase text-sm">Menu Link 3</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
