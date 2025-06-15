import React, { useState } from 'react';
import { slides } from '../Assets/Assets';

const About = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    
    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="max-w-6xl mx-auto p-4 select-none min-h-[90vh]">
            <div className="text-center py-20 px-4">
                <div className="mb-4">
                    <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">About</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-200">
                    Powerful tool for <br />
                    boosting social media 
                    <span className="text-moon-lavender-sky">growth</span>
                </h1>
            </div>
            {/* main section */}
            <div className="relative flex items-center justify-center h-100 md:h-96 bg-gradient-to-r from-moon-lavender-sky to-moon-blush-mist rounded-xl overflow-hidden mb-6">
                {/* content */}
                <div className="relative z-10 p-6 text-center md:text-left max-w-xl">
                    <div className="text-sm text-gray-600 mb-2 ">
                        {slides[activeIndex]?.subtitle?.split(", ").map((tag) => (
                            <span key={tag} className="inline-block bg-gray-800 text-gray-400 text-xs rounded-full px-3 py-1 mr-2 mb-2" >{tag}</span>
                        ))}
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">{slides[activeIndex].title}</h2>
                    {slides[activeIndex].description && (
                        <p className="text-moon-deep-purple mb-4">{slides[activeIndex].description}</p>
                    )}
                    <button className="btn-primary">Explore Now &rarr;</button>
                </div>
            </div>

            {/* slide buttons */}
            <div className="flex space-x-2 md:space-x-4 overflow-x-auto">
                {slides.map((slide, idx) => (
                    <button key={slide.id} onClick={() => handleDotClick(idx)} className={`relative flex items-center justify-center rounded-full text-sm font-semibold h-14 md:h-20 w-14 md:w-20
                        ${ idx === activeIndex ? "bg-moon-lavender-sky text-white" : "bg-white text-moon-deep-purple hover:bg-moon-blush-mist/80 hover:text-white"}`} aria-label={`Slide ${idx + 1}: ${slide.title}`}>
                            <span className="rotate-90 md:rotate-0">{idx < 9 ? `${idx + 1}` : idx + 1}</span>
                    </button>
                ))}
            </div>

            {/* footer stats & icons */}
            <div className="mt-6 grid grid-rows-2 gap-y-6 sm:flex sm:justify-between sm:items-center text-gray-400 text-xs md:text-sm px-2 ">
                <div className="flex space-x-6">
                    <span>98% Satisfied Clients</span>
                    <span>24/7 Customer Support</span>
                    <span>10K+ Happy Customers</span>
                </div>
                <div className="flex space-x-4">
                    <a href="#" aria-label="Behance" className="hover:text-moon-lavender-sky">
                        <i className="fa-brands fa-facebook text-xl"></i>
                    </a>
                    <a href="#" aria-label="Instagram" className="hover:text-moon-lavender-sky">
                        <i className="fa-brands fa-instagram text-xl"></i>
                    </a>
                    <a href="#" aria-label="Close" className="hover:text-moon-lavender-sky">
                        <i className="fa-brands fa-x-twitter text-xl"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About