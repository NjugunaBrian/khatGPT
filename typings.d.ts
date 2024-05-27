interface ChatMessage {
    role: 'system' | 'user' | 'assistant';
    content: string;
}

interface Message {
    text: ChatMessage[] | string;
    createdAt: admin.firestore.Timestamp;
    user: {
        _id: string;
        name: string;
        avatar: string;
    };
}