import { ArchiveBoxIcon, TrashIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import Chat from '@/components/Chat';
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, deleteDoc, doc, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";

type Props = {
    id: string
}

function ChatRow({id}: Props) {

    const pathname = usePathname();
    const router = useRouter()
    const { data: session } =  useSession();
    const [active, setActive] =  useState(false)

    const [messages] = useCollection(query(collection(db, "users", session?.user?.email!, "chats", id, "messages"), orderBy("createdAt", "desc")))

    useEffect(() => {
        if (!pathname) return;

        setActive(pathname.includes(id));

    }, [id, pathname]);

    const removeChat = async() => {
        await deleteDoc(doc(db, "users", session?.user?.email!, "chats", id));
        router.replace('/');

    }

  return (
    <Link href={`/chat/${id}`} className={`flex items-center p-3 mt-2 rounded-md hover:bg-[#161616] ${active && 'bg-[#212121]'}`}>
        <p className="flex-1 inline-flex truncate">
            {messages?.docs[0]?.data().text || "New Chat"}
        </p>
        <div className="flex space-x-0">
            <TrashIcon onClick={removeChat}  className="h-5 w-5" />
            <ArchiveBoxIcon className="h-5 w-5"/>
        </div>
    </Link>
  )
}

export default ChatRow