"use client";

import Chat from "@/components/Chat";
import Sidebar from "@/components/Sidebar";

export default function Home() {
    


  return (  
      <div className="min-h-screen flex w-full">
        <Sidebar />
        <Chat params={{ ChatId: "" }}/>
      </div>
  );
}
