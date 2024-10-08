"use client"


import { db } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"

function NewChat() {
    const { data: session }  = useSession();
    const router = useRouter();
    const createNewChat = async () => {
        const doc = await addDoc(collection(db, "users", session?.user?.email!, "chats"), {
            userId: session?.user?.email!,
            createdAt: serverTimestamp(),
        }) 

        router.push(`/chat/${doc.id}`)

    }


    return (
        <div onClick={createNewChat}>
            <button className='p-3 flex items-center justify-center space-x-24 rounded-md hover:bg-[#101010] mb-4'>
                <p className='font-bold'>New Chat</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                    <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
                </svg>
            </button>
        </div>
    )
}

export default NewChat