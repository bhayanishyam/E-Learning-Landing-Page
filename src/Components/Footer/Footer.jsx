import React from 'react';
import { FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer className='bg-light'>
            <div className='container py-28'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4'>
                    {/* Journey */}
                    <div className='grid gap-4 max-w-[300px] '>
                        <h1 className='text-2xl font-bold'>
                            The Coding Journey
                        </h1>
                        <p className='text-gray-400'>
                            TCJ is a platform dedicated to empowering aspiring developers. From beginner tutorials to advanced programming concepts, we provide a comprehensive learning experience designed to help you master coding skills, build projects, and launch your tech career.
                        </p>
                    </div>
                    {/* Linds */}

                    <div className='grid grid-cols-2 gap-10'>
                        <div className=''>
                            <h1 className='text-2xl font-bold mb-4'>Courses</h1>
                            <ul className='text-lg space-y-2'>
                                <li><a href="#" className='text-gray-400 hover:text-secondary cursor-pointer duration-200'>Web Development</a></li>
                                <li><a href="#" className='text-gray-400 hover:text-secondary cursor-pointer duration-200'>Software Development</a></li>
                                <li><a href="#" className='text-gray-400 hover:text-secondary cursor-pointer duration-200'>Apps Development</a></li>
                                <li><a href="#" className='text-gray-400 hover:text-secondary cursor-pointer duration-200'>E-learning</a></li>
                            </ul>
                        </div>
                        <div className=''>
                            <h1 className='text-2xl font-bold mb-4'>Link</h1>
                            <ul className='text-lg space-y-2'>
                                <li><a href="#" className='text-gray-400 hover:text-secondary cursor-pointer duration-200'>Home</a></li>
                                <li><a href="#" className='text-gray-400 hover:text-secondary cursor-pointer duration-200'>Services</a></li>
                                <li><a href="#" className='text-gray-400 hover:text-secondary cursor-pointer duration-200'>About</a></li>
                                <li><a href="#" className='text-gray-400 hover:text-secondary cursor-pointer duration-200'>Contact</a></li>
                            </ul>
                        </div>


                    </div>
                    {/* Get In Touch */}
                    <div className='max-w-[300px] space-y-4'>
                        <h1 className='text-2xl font-bold mb-4'>Get In Touch</h1>
                        {/* Input section */}
                        <div className='py-2'>
                            <div className='flex justify-baseline'>
                                <input type="text" placeholder='Enter your email' className='pl-4 outline-0 pr-8 py-4 bg-white rounded-l-2xl focus:!border-0' />
                                <button className='bg-primary text-white px-6 py-4  rounded-r-2xl font-semibold '>Go</button>
                            </div>

                        </div>
                        <div className='flex py-3 space-x-6'>
                            <FaWhatsapp className=' hover:text-primary' />
                            <FaInstagram className=' hover:text-primary' />

                            <FaYoutube className=' hover:text-primary' />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
