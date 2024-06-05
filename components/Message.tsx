import { DocumentData } from "firebase/firestore";

type Props = {
    message: DocumentData
}

function Message({ message }: Props) {
    return (
        <div className="py-3">
            <div className="flex items-center space-x-2 max-w-md md:max-w-3xl mx-auto">
                <img src={message.user.avatar} alt="" className="h-8 w-8 rounded-full" />
                <p>{message.text}</p>
            </div>
        </div>
    )
}

export default Message