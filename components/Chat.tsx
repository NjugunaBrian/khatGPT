'use client';

import Image from 'next/image';
import React, { useState } from 'react'
import { ArrowUpIcon } from '@heroicons/react/24/solid';
import Navbar from './Navbar';



function Chat() {

  const [value, setValue] = useState('');
  const [searches, setSearches] = useState<string[]>([]);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    addSearch(value)
    setValue(' ')
  }

  const addSearch = (searches: string) => {
    setSearches((currentSearches) => [...currentSearches, searches]) 
  }


  return (
    <div className='w-9/12 h-screen bg-[#060606] flex flex-col'>
      <Navbar />
      <div className='flex flex-col max-w-fit py-5 px-20 overflow-y-auto flex-grow h-full space-y-3'>
         {searches.map((search) => (
          <div key={search} className='space-x-3 flex'>
            <div>
              <Image src="/Kanye_West.jpg" alt=' ' className='rounded-full object-cover' width={30} height={30} />
            </div>
            <div className='space-y-1'>
              <p className='font-bold'>You</p>
              <p>
                {search}
              </p>
            </div>
          </div>
        ))}  
      </div>
      <div>
        <form onSubmit={handleSubmit} className='flex items-center justify-center rounded-lg mt-auto p-5'>
          <div className='w-10/12 flex items-center justify-center bg-[#212121] px-2 rounded-xl'>
            <input className='p-3 outline-none flex-grow bg-[#212121]' type='text' placeholder='Message KhatGPT' value={value} onChange={(e) => setValue(e.target.value)} />
            <button type='submit' title='Send text' className='p-2 bg-[#333333] rounded-xl'>
              <ArrowUpIcon className='h-5 w-5' />
            </button>

          </div>
        </form>

      </div>

    </div>
  )
}

export default Chat