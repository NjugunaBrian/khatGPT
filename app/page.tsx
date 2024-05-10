import Chat from "@/components/Chat";
import Sidebar from "@/components/sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex w-full">
      <Sidebar />
      <Chat />
    </main>
  );
}
