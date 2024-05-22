import Chat from "@/components/Chat"


function ChatPage() {
  return (
    <div className="min-h-screen flex w-full">
        <Chat params={{
              id: ""
          }} />
      </div>
  )
}

export default ChatPage