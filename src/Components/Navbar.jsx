import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="fixed top-0 left-0 right-0 md:top-2 md:left-16 md:right-16 z-50 bg-gray-50 bg-gradient-to-r from-moon-lavender-sky to-moon-blush-mist md:rounded-full shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* logo */}
                    <div className="flex items-center">
                        <a href="#" className="text-xl font-bold font-noto-jp text-moon-deep-purple">マイブランド</a>
                    </div>
                    {/* desktop menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        <a href="#home" className="text-moon-deep-purple hover:text-moon-mystic-plum transition-colors">Home</a>
                        <a href="#about" className="text-moon-deep-purple hover:text-moon-mystic-plum transition-colors">About</a>
                        <a href="#services" className="text-moon-deep-purple hover:text-moon-mystic-plum transition-colors">Services</a>
                        <a href="#contact" className="text-moon-deep-purple hover:text-moon-mystic-plum transition-colors">Contact</a>
                    </div>
                    {/* mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-moon-deep-purple focus:outline-none" aria-label="Toggle menu">
                            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2 transition-all duration-300 ease-in-out rounded-none">
                    <a href="#home" className="block py-2 text-moon-deep-purple hover:text-moon-mystic-plum transition-colors">
                        <i className="fa-solid fa-house mr-2"></i> 
                        Home
                    </a>
                    <a href="#about" className="block py-2 text-moon-deep-purple hover:text-moon-mystic-plum transition-colors">
                        <i className="fa-solid fa-info-circle mr-2"></i> 
                        About
                    </a>
                    <a href="#services" className="block py-2 text-moon-deep-purple hover:text-moon-mystic-plum transition-colors">
                        <i className="fa-solid fa-briefcase mr-2"></i> 
                        Services
                    </a>
                    <a href="#contact" className="block py-2 text-moon-deep-purple hover:text-moon-mystic-plum transition-colors">
                        <i className="fa-solid fa-envelope mr-2"></i> 
                        Contact
                    </a>
                </div>
            )}
        </div>
    );
}

export default Navbar;