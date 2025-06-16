import React, { useEffect, useState } from 'react';
import { sentences } from '../Assets/Assets';

const Home = ({id}) => {
    const [sentence, setSentence] = useState("");
    const [displayText, setDisplayText] = useState("");
    const [typingIndex, setTypingIndex] = useState(0);

    // random sentences
    useEffect(() => {
        const random = sentences[Math.floor(Math.random() * sentences.length)];
        setSentence(random);
        setDisplayText("");
        setTypingIndex(0);
    }, []);

    // typing
    useEffect(() => {
        if (typingIndex < sentence.length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + sentence[typingIndex]);
                setTypingIndex((prev) => prev + 1);
            }, 50);

            return () => clearTimeout(timeout);
        }
    }, [typingIndex, sentence]);

    return (
        <div id={id} className="flex items-center justify-center p-4 md:p-8 min-h-[90vh]">
            <div className="max-w-3xl text-center space-y-6">
                <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-moon-lavender-sky to-moon-blush-mist text-transparent bg-clip-text leading-tight">{displayText}</h1>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem assumenda quo quasi fuga. Totam expedita quia officiis sit, delectus minima.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
                    <a href="#" className="btn-primary w-full sm:w-auto text-center">Get started</a>
                    <a href="#" className="btn-secondary w-full sm:w-auto text-center">
                        Learn more
                        <span className="ml-2" aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;