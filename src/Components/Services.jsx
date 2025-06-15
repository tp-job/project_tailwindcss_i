import React from 'react';
import { features, testimonials } from '../Assets/Assets';

const Services = () => {
    return (
        <div className="max-w-6xl mx-auto p-4 select-none">
            {/* title section */}
            <div className="text-center py-20 px-4">
                <div className="mb-4">
                    <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">Social Tools</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-200">
                    Powerful tool for <br />
                    boosting social media 
                    <span className="text-moon-lavender-sky">growth</span>
                </h1>
                <p className="text-gray-400 max-w-xl mx-auto mb-6">Produce unified short videos simultaneously with automatic generation of captions, effects, background, and music.</p>
                <button className="btn-secondary">
                    Try Now
                    <span className="ml-2" aria-hidden="true">→</span>
                </button>
            </div>
            {/* block section */}
            <div className="grid md:grid-cols-3 gap-6 px-4 md:px-20 py-16">
                {features.map((f, i) => (
                <div key={i} className="bg-moon-lavender-sky/20 p-6 rounded-xl text-center hover:shadow-lg transition">
                    <div className="text-4xl mb-4">{f.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                    <p className="text-gray-400 text-sm">{f.desc}</p>
                </div>
                ))}
            </div>
            {/* community section */}
            <div className="px-4 md:px-20 py-16">
                <div className="text-center mb-10">
                    <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">Testimonials</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-200">
                        Our User Stories: <br className="md:hidden" />
                        How We Made an 
                        <span className="text-moon-lavender-sky">Impact</span>
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((t, i) => (
                    <div key={i} className="bg-moon-lavender-sky/20 p-6 rounded-xl text-sm text-gray-400">
                        <p className="mb-4 italic">"{t.quote}"</p>
                        <p className="text-white font-medium">- {t.name}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default Services