'use client';

import Image from 'next/image';
import React, { useState } from 'react'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import Navbar from './Navbar';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { db } from '@/firebase';

type Props = {
  params: {
    id: string
  }
}


function Chat({ params: { id } }: Props) {

  const [value, setValue] = useState('');
  const [searches, setSearches] = useState<string[]>([]);
  const { data: session } = useSession();

  //useSWR to get model
  const model = "gpt-3.5-turbo"

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;

    const input = value.trim();
    addSearch(value)
    setValue(' ')

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      }
    };

    await addDoc(collection(db, "users", session?.user?.email!, "chats", id, "messages"),
      message
    )

    await fetch('/api/askQuestion', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        value: input,
        id,
        model,
        session
      })
    }).then(() => {

    });
  }

  const addSearch = (searches: string) => {
    setSearches((currentSearches) => [...currentSearches, searches])
  }


  return (
    <div className='w-9/12 h-screen bg-[#060606] flex flex-col overflow-hidden'>
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
            <input className='p-3 outline-none flex-grow bg-[#212121]' type='text' placeholder='Message KhatGPT...' value={value} onChange={(e) => setValue(e.target.value)} />
            <button type='submit' disabled={!value} title='Send text' className='p-2 bg-[#333333] rounded-xl disabled:cursor-not-allowed'>
              <PaperAirplaneIcon className='h-5 w-5 -rotate-45' />
            </button>

          </div>
        </form>

      </div>

    </div>
  )
}

export default Chat