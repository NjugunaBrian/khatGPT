"use client";

import Chat from "@/components/Chat";
import Sidebar from "@/components/sidebar";
import { signOut, useSession } from "next-auth/react";

export default function Home() {
    
  const session = useSession();


  return (  
      <div className="min-h-screen flex w-full">
        <Sidebar />
        <Chat />
      </div>
  );
}
