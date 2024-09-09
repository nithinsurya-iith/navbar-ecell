"use client";
import React from 'react'
import Image from 'next/image';
import logo from './logo.png';

const Navbar = () => {


  return (
    <>
      <nav className="bg-white">
        <div className='max-w7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center '>
              <div className='flex-shrink-0'>
              <Image className=" border-black" src={logo} alt="PlayBook" height={40} width={90} />
              </div>
              
              <div className='ml-4 flex items-center space-x-4'>
                <a href="/" className='text-black hover:text-black m-1 px-2 py-2 rounded-md font-semibold'>
                Products
                </a>
                <a href="/" className='text-black hover:text-black m-1 px-2 py-2 rounded-md font-semibold'>
                Pricing
                </a>
                <a href="/" className='text-black hover:text-black m-1 px-2 py-2 rounded-md font-semibold'>
                Blog
                </a>
                <a href="/" className='text-black hover:text-black m-1 px-2 py-2 rounded-md font-semibold'>
                Community ✨
                </a>
              </div>
            </div>
            <div className='hidden md:block'>
            <div className='ml-4 flex items-center space-x-4'>
                <a href="/" className='m-2 px-6 py-2 rounded-md font-semibold text-red-500 hover:bg-white hover:text-black bg-white border-solid border-2 border-red-500 '>
                Log in
                </a>
                <a href="/" className='-2 px-6 py-2 rounded-md font-semibold text-white hover:bg-red-500 hover:text-black bg-red-500'>
                Early Acccess
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;