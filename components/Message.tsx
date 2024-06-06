import { DocumentData } from "firebase/firestore";
import Image from "next/image";

type Props = {
    message: DocumentData
}

function Message({ message }: Props) {
    return (
        <div className="py-3">
            <div className="flex items-center space-x-2 max-w-md md:max-w-3xl mx-auto">
                <Image src={message.user.avatar} alt="" height={8} width={8} className="rounded-full" />
                <p>{message.text}</p>
            </div>
        </div>
    )
}

export default Message