"use client";

import Sidebar from "@/components/Sidebar";
import ChatPage from "./chat/[id]/page";
import ClientProvider from "@/components/ClientProvider";

export default function Home() {
    


  return (  
      <div className="min-h-screen flex w-full">
        <Sidebar />
        <ClientProvider />
        <ChatPage params={{
        id: ""
      }}/>
      </div>
  );
}
