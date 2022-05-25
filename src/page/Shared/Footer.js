import React from 'react';

const Footer = () => {
    return (
        <div className='pt-10 bg-stone-900'>
            {/* <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 " /> */}

            <footer className="p-4  bg-stone-900 text-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"> Computer Parts Manufacturer </span>
                    <ul className="flex footer-responsive flex-wrap items-center mb-6 text-xl text-white sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="https://www.linkedin.com/in/emrul-kayes-b61895237/" className="mr-4 hover:underline md:mr-6 "><i className="fa-brands fa-linkedin"></i></a>
                        </li>
                        <li>
                            <a href="https://github.com/its-kayes" className="mr-4 hover:underline md:mr-6"><i className="fa-brands fa-github"></i></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/kayes0000000/" className="mr-4 hover:underline md:mr-6 "><i className="fa-brands fa-facebook"></i></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/___kayes__/" className="hover:underline"><i className="fa-brands fa-instagram"></i></a>
                        </li>
                    </ul>
                </div>
                <span className="block text-sm text-white sm:text-center dark:text-gray-400"> This Website Is Design And Deploy by <span className='font-bold text-green-300 '> <a href="https://www.linkedin.com/in/emrul-kayes-b61895237"> Emrul Kayes </a> </span> For Educational Purpose
                </span>
                <span className="block text-sm text-white sm:text-center dark:text-gray-400">© Copyright 2022</span>
            </footer>

        </div>
    );
};

export default Footer;