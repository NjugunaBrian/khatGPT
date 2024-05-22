"use client";

import Chat from "@/components/Chat";
import Sidebar from "@/components/sidebar";

export default function Home() {
    


  return (  
      <div className="min-h-screen flex w-full">
        <Sidebar />
        <Chat params={{
        id: ""
      }} />
      </div>
  );
}
