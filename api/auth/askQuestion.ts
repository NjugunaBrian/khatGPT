import query from "@/lib/queryApi";
import type { NextApiRequest, NextApiResponse } from "next";
import firebaseAdmin from "firebase-admin";
import { adminDb } from "@/firebaseAdmin";

type Data = {
  answer: string | ChatMessage[];
};

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { value, ChatId, model, session } = req.body;
  if (!value) {
    res.status(400).json({ answer: "Please provide a value!" });
    return;
  }
  if (!ChatId ) {
    res.status(400).json({ answer: "Please provide a valid chat id" });
    return;
  }

  //   ChatGPT query
  const response = await query(value, ChatId, model);

  const message: Message = {
    text: response || "ChatGPT cannot find an answer for that!",
    createdAt: firebaseAdmin.firestore.Timestamp.now(),
    user: {
      _id: "ChatGPT",
      name: "ChatGPT",
      avatar: "https://links.papareact.com/89k",
    },
  };

  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(ChatId)
    .collection("messages")
    .add(message);

  res.status(200).json({ answer: message.text });
}
