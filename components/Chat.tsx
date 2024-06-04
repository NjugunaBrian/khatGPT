'use client';

import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid';
import Navbar from './Navbar';
import { Dialog, DialogPanel, } from '@headlessui/react';
import { useSession } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, orderBy, query } from 'firebase/firestore';
import { db } from '@/firebase';
import Message from './Message';


type Props = {
  ChatId: string;
}

function Chat({ChatId}: Props) {

  const { data: session } = useSession();

  const [messages] = useCollection(session && query(collection(db, "users", session?.user?.email!, "chats", ChatId),
   orderBy("createdAt", "asc")))
    

   //burger menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


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

      <div className='flex-1'>
        {messages?.docs.map((message) => (
          <Message key={message.id} message={message.data()}  />
        ))}
      </div>
      
      

    </div>
  )
}

export default Chat