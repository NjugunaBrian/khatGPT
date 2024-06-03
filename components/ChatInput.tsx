'use client'

import { useState } from 'react';
import {  PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { db } from '@/firebase';

type Props = {
    ChatId: string;
}


function ChatInput({ChatId}: Props) {

    const [value, setValue] = useState("");
    const [searches, setSearches] = useState<string[]>([]);
    const { data: session } = useSession();

    //useSWR to get model
    const model = "gpt-3.5-turbo"

    const addSearch = (searches: string) => {
        setSearches((currentSearches) => [...currentSearches, searches])
      }
    



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!value) return;
    
        const input  = value.trim()
        
    
        {/*const input: ChatMessage[] = [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: "What is the capital of France?" }
        ];*/}
        addSearch(value)
        setValue(' ')
        console.log(input);
        console.log(ChatId)
    
        const message: Message = {
          text: value,
          createdAt: serverTimestamp(),
          user: {
            _id: session?.user?.email!,
            name: session?.user?.name!,
            avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`,
          }
        };
    
        await addDoc(collection(db, "users", session?.user?.email!, "chats", ChatId, "messages"),
          message
        )
    
        await fetch('/api/askQuestion', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            text: input,
            ChatId,
            model,
            session
          })
        }).then(() => {
          console.log("Successful!")
        })
      }

  return (
    <div className='bg-[#212121] rounded-3xl mb-5 mx-10'>
        <form onSubmit={handleSubmit} className='flex items-center justify-center p-2'>
            <input className='p-3 outline-none flex-grow bg-[#212121] placeholder:relative' type='text' placeholder='Message KhatGPT...' value={value} onChange={(e) => setValue(e.target.value)} />
            <button type='submit' disabled={!value} title='Send text' className='p-2 bg-[#333333] rounded-xl disabled:cursor-not-allowed'>
              <PaperAirplaneIcon className='h-5 w-5 -rotate-45' />
            </button>

        </form>
    </div>
  )
}

export default ChatInput