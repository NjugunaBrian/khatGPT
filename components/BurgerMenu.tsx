'use client'

import React, { useState} from 'react'
import { useSession, signOut } from 'next-auth/react';
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, doc, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';
import ChatRow from './ChatRow';
import { useRouter } from "next/navigation"
import { Bars3Icon } from '@heroicons/react/24/solid';


function Sidebar() {

    const { data: session } = useSession();

    const [chats, loading, error] = useCollection(
        session && collection(db, "users", session?.user?.email!, "chats")
    );

    const router = useRouter();
    const createNewChat = async () => {
        const doc = await addDoc(collection(db, "users", session?.user?.email!, "chats"), {
            userId: session?.user?.email!,
            createdAt: serverTimestamp(),
        })

        router.push(`/chat/${doc.id}`)

    }

    //burger menu
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);



    return (

        <div className='flex flex-col p-0 h-full'>
            <div className='overflow-y-auto flex-1'>

                <div className='flex justify-between'>
                    <div onClick={createNewChat} className='p-3 hover:bg-[#101010]'>
                    <button className='flex items-center rounded-md '>                        
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                            <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
                        </svg>
                    </button>
                    </div>
                    <div>
                    <button type='button' className='rounded-md p-2.5 text-white hover:bg-[#101010]' onClick={() => setMobileMenuOpen(false)}>
                        <span className='sr-only'>Close Menu</span>
                        <Bars3Icon className='h-6 w-6' aria-hidden='true' />
                    </button>
                    </div>

                </div>

                {chats?.docs.map(chat => (
                    <ChatRow key={chat.id} id={chat.id} />
                ))}

                <div className='py-5'>
                    <span className='text-gray-400 text-xs'>Today</span>
                    <p>Run React project Locally</p>
                </div>
                <div className='py-5'>
                    <span className='text-gray-400 text-xs '>Today</span>
                    <p>Run React project Locally</p>
                </div>
                <div className='py-5'>
                    <span className='text-gray-400 text-xs '>Today</span>
                    <p>Run React project Locally</p>
                </div>
                <div className='py-5'>
                    <span className='text-gray-400 text-xs '>Today</span>
                    <p>Run React project Locally</p>
                </div>
                <div className='py-5'>
                    <span className='text-gray-400 text-xs '>Today</span>
                    <p>Run React project Locally</p>
                </div>

            </div>

            <div className='shrink-0 bottom-0 mt-1'>

                <div className='flex space-x-2 hover:bg-[#101010] py-2 px-1 rounded-lg'>
                    <button className='rounded-full outline outline-[1px] px-2 py-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <div className='flex flex-col'>
                        <p className='text-sm'>Upgrade Plan</p>
                        <p className='text-xs text-gray-400'>GET GPT-4, DALL.E, and more</p>
                    </div>

                </div>

            </div>

        </div>

    )
}

export default Sidebar