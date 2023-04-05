import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheckIcon } from '@heroicons/react/24/solid'

const Header = () => {
    return (
        <div>
            <nav className='w-ful bg-gray-800 text-white px-20 flex justify-between h-20 items-center'>
                <h1 className='cursor-pointer inline-flex gap-4 ' ><span>digital work</span> <ShieldCheckIcon className="h-6 w-6 text-blue-500" /> </h1>

                <ul className='flex'>
                    <Link className='pl-4' to="/">Home</Link>
                    <Link className='pl-4' to="/About">About</Link>
                    <Link className='pl-4' to="/Contact">Contact</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;