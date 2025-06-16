import React from 'react';

const Footer = () => {
    return (
        <div className="mt-20">
            <div className="text-center">
                <div className="flex items-center gap-2 mx-auto mt-4 text-xl w-max">
                    <box-icon name='envelope' type='solid' ></box-icon>
                    nevinasv@gmail.com
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-r-gray-400 mx-[10%] mt-12 py-6">
                <p>2025 Nevinas. All rights reserved.</p>
                <ul className="flex items-center justify-center gap-10 mt-4 sm:mt-0">
                    <li>
                        <a href="#" className="">
                            <i className="fa-brands fa-x-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer