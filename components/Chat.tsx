'use client';

import Image from 'next/image';
import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid';
import Navbar from './Navbar';
import { Dialog, DialogPanel, } from '@headlessui/react';


type Props = {
  ChatId: string;
}

function Chat({ChatId}: Props) {
    
  const [searches, setSearches] = useState<string[]>([]);
  //burger menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const addSearch = (searches: string) => {
    setSearches((currentSearches) => [...currentSearches, searches])
  }


  return (
    <div className='flex flex-col flex-1 overflow-hidden'>
      <div className='flex items-center space-x-36 md:space-x-0'>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='rounded-md p-2.5 text-white'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />

          </button>
        </div>
        <Navbar />
      </div>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10 bg-black bg-opacity-100' />

        <DialogPanel className={`fixed inset-y-0 left-0 z-10 w-3/5 transform transition-transform overflow-y-auto p-5 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10
         ${mobileMenuOpen ? 'dialog-enter-active' : 'dialog-leave-active'}
         ${!mobileMenuOpen ? 'dialog-leave-to' : ''}`}>
          <button type='button' className='-my-3 -mx-3.5 rounded-md p-2.5 text-white' onClick={() => setMobileMenuOpen(false)}>
            <span className='sr-only'>Close Menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>

        
          


        </DialogPanel>



      </Dialog>

      <div className='flex flex-col max-w-fit py-5 px-20 overflow-y-auto flex-1 h-full space-y-3'>
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
      
      

    </div>
  )
}

export default Chat