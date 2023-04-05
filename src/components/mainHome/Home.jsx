import React from 'react';
import { Link } from 'react-router-dom';
import Blog from '../Blog/Blog';
import Animation from '../animation/Animation';


const Home2 = () => {
    return (
        <div>
            <div className='w-full h-screen  mb-4'>
                {/* here is header section and style */}
                <div className='pb-10  pt-10'>
                    <h1 className='text-7xl font-bold text-center text-orange-400' id=''>Hi THer`e</h1>
                    <p className='text-3xl text-center pt-2 font-bold text-gray-300'>ভয় পেয়ে কাজ না করাই সবচেয়ে বর ভয়</p>
                </div>

                <div className='md:flex  md:mx-10'>

                    <div className='md:w-1/2 mb-5  md:h-96 pb-5 '>
                        <div className='pt-2 flex w-52 justify-center items-center pl-2 '>
                            <div className=''>
                                <img className='w-[30px] rounded-full' src="https://yt3.googleusercontent.com/ytc/AL5GRJVYca0AeN3Z99b2rUO-kJAWyO85w4la9YrFiTa9rw=s900-c-k-c0x00ffffff-no-rj" alt="jhanker-sir" />

                            </div>
                            <div className='pl-2'>
                                <h1>jhankar <span className='text-gray-400'>mahbub</span></h1>
                            </div>

                        </div>
                        <div className='pl-5 mt-10'>

                            <h1 className='text-4xl'>অপেক্ষা বনাম অন্য কিছুর চেষ্টা</h1>
                            <Link className='hover:text-gray-800' to="https://www.jhankarmahbub.com/motivate/index.html">Motivate yourself</Link>

                            <Blog></Blog>
                        </div>

                    </div>

                    <div className='md:w-1/2 md:h-96 '>
                        <Animation></Animation>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home2;