import React from 'react';

const Contact = () => {
    return (
        <div className="max-w-6xl mx-auto p-4 select-none">
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
            </div>
            {/* form contact section */}
            <form method="POST" className="max-w-2xl mx-auto">
                <div className="grid gap-6 mt-10 mb-8 md:grid-cols-1 xl:grid-cols-2">
                    <input type="text" name="name" id="name"  placeholder="Your full name" className="p-3 outline-none border-[.5px] rounded-md bg-moon-lavender-sky/20 focus:ring-2 focus:ring-moon-lavender-sky" />
                    <input type="email" name="email" id="email"  placeholder="Your full email" className="p-3 outline-none border-[.5px] rounded-md bg-moon-lavender-sky/20 focus:ring-2 focus:ring-moon-lavender-sky" />
                </div>
                <textarea rows="6" placeholder="Your full name" className="w-full p-4 outline-none border-[.5px] rounded-md bg-moon-lavender-sky/20 mb-6 focus:ring-2 focus:ring-moon-lavender-sky"></textarea>
                <div className="flex justify-center">
                    <button className="btn-primary">Submit now</button>
                </div>
            </form>
        </div>
    );
}

export default Contact