"use client";

import Sidebar from "@/components/Sidebar";
import ChatPage from "./chat/[id]/page";

export default function Home() {
    


  return (  
      <div className="min-h-screen flex w-full">
        <Sidebar />
        <ChatPage params={{
        id: ""
      }}/>
      </div>
  );
}
