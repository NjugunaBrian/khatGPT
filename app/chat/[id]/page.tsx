import Chat from "@/components/Chat"
import ChatInput from "@/components/ChatInput"



type Props =  {
  params : {
    id: string
  }
    
}

function ChatPage({params: {id}} : Props) {
  return (
    <div className="h-screen flex flex-col overflow-hidden flex-1 bg-[#060606]">
        <Chat ChatId={id} />
        <ChatInput ChatId={id} />
    </div>
  )
}

export default ChatPage