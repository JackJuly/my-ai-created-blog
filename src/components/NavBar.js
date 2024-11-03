import React from 'react';
import { FaReact } from "react-icons/fa";
import LanguageToggle from './LanguageToggle';

const NavBar = ({ toggleSidebar }) => {

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/30 backdrop-blur-lg shadow-md border-b border-gray-300 p-4 flex justify-between items-center z-40">

            <div className="flex items-center space-x-4">
                <button className="smd:hidden" onClick={toggleSidebar}>
                    <svg
                        className="w-8 h-8 text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                <span className="text-black text-4xl"><FaReact /></span>
                <h1 className="text-2xl font-bold p-0 m-0 leading-none">
                    LOGO
                </h1>
            </div>
            <LanguageToggle className="flex space-x-4" />
        </nav>
    );
};

export default NavBar;