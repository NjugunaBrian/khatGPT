import { DocumentData } from "firebase/firestore";

type Props = {
    message: DocumentData
}

function Message({ message }: Props) {
  return (
    <div className="flex space-x-2 max-w-2xl mx-auto">
        {/*<img src={message.user.avatar} alt="" className="h-8 w-8" />*/}
        <p>{message.text}</p>
    </div>
  )
}

export default Message