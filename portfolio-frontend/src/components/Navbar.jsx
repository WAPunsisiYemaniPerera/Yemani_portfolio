import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () =>{
    return (
        <nav className='bg-[#0a192f] shadow-md sticky top-0 z-50'>
            <div className='w-full px-6 md:px-10 lg:px-16 py-4 flex justify-between items-center'>
                {/* Name */}
                <Link to="/" className='font-bold text-2xl text-white hover:text-[#64ffda] transition-colors'>
                    Yemani Perera
                </Link>

                {/* Navigation Links */}
                <div className='hidden md:flex space-x-6'>
                <Link to="/about" className='text-[#ccd6f6] hover:text-[#64ffda] transition-colors font-semibold'>
                    About
                </Link>
                <Link to="/skills" className='text-[#ccd6f6] hover:text-[#64ffda] transition-colors font-semibold'>
                    Skills 
                </Link>
                <Link to="/education" className='text-[#ccd6f6] hover:text-[#64ffda] transition-colors font-semibold'>
                    Education
                </Link>
                <Link to="/projects" className='text-[#ccd6f6] hover:text-[#64ffda] transition-colors font-semibold'>
                    Projects
                </Link>
                
                <Link to="/connect" className='text-[#ccd6f6] hover:text-[#64ffda] transition-colors font-semibold'>
                    Connect
                </Link>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;