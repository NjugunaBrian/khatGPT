'use client';

import React, { useState } from 'react'
import Image from 'next/image';
import { Bars3Icon } from '@heroicons/react/24/solid';
import Navbar from './Navbar';
import { Dialog, DialogPanel, } from '@headlessui/react';
import { useSession, signOut } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, orderBy, query } from 'firebase/firestore';
import { db } from '@/firebase';
import Message from './Message';
import BurgerMenu from './BurgerMenu';


type Props = {
  ChatId: string;
}

function Chat({ ChatId }: Props) {

  const { data: session } = useSession();

  const [messages] = useCollection(session && query(collection(db, "users", session?.user?.email!, "chats", ChatId),
    orderBy("createdAt", "asc")))


  //burger menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <div className='flex flex-col flex-1 overflow-hidden'>
      <div className='flex items-center justify-between md:space-x-0 px-2'>
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
        <div onClick={() => signOut()} className='flex space-x-2 hover:bg-[#101010] py-1 px-1 rounded-lg md:hidden'>
          <button className='rounded-full px-1 py-1'>
            <Image src={session?.user?.image!} alt='Profile pic' height={7} width={7} className='rounded-full cursor-pointer' />
          </button>
        </div>
      </div>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='absolute inset-y-0 left-0 w-64 z-10 bg-[#101010]' />

        <DialogPanel className={`fixed inset-y-0 left-0 z-10  transform transition-transform overflow-y-auto px-5 py-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10
         ${mobileMenuOpen ? 'dialog-enter-active' : 'dialog-leave-active'}
         ${!mobileMenuOpen ? 'dialog-leave-to' : ''}`}>
          
          <BurgerMenu />

        </DialogPanel>



      </Dialog>

      <div className='flex-1'>
        {messages?.docs.map((message) => (
          <Message key={message.id} message={message.data()} />
        ))}
      </div>



    </div>
  )
}

export default Chat